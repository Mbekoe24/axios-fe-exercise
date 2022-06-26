import React from "react";
import axios from "axios";
import Slider from "../components/Slider/Slider";
import { InferGetServerSidePropsType } from "next";

const Index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { data } = props;

  return (
    <>
      <Slider data={data} />
    </>
  );
};
export default Index;

export async function getServerSideProps(context) {
  const { data: streamData } = await axios.get(
    "https://api.axios.com/api/render/stream/content/"
  );
  // console.log("streamData", streamData);
  const { results } = streamData;
  const getStories = results.map((id) =>
    axios.get(`https://api.axios.com/api/render/content/${id}`)
  );
  console.log(getStories);
  const rawStories = await Promise.all(getStories);
  console.log("LOLLL");
  console.log("rawStories", rawStories);
  const data = rawStories.map(({ data: result }) => {
    console.log("result", result);
    return {
      id: result?.id,
      headline: result?.headline,
      displayName: result?.authors?.[0]?.display_name,
      // sectionLabel: result?.sections?.[0]?.name || ,
      htmlId: "",
      altText: result?.primary_image
        ? result?.primary_image?.alt_text
        : result?.social_image.alt_text || "",
      topicName: result?.topics?.[0]?.name
        ? result?.topics?.[0]?.name
        : result?.audience?.name,
      // socialImage: result?.social_image || "",
      primaryImage: result?.primary_image?.base_image_url
        ? result?.primary_image?.base_image_url
        : result?.byline_photo,
      publishedDate: result?.published_date,
      permaLink: result?.permalink,
    };
  });

  console.log("data line 46", data);

  if (!streamData && !data) {
    return {
      props: {
        data: [],
      },
    };
  }

  return {
    props: {
      data: data,
    },
  };
}
