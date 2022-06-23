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
      <h1> World</h1>
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
  const rawStories = await Promise.all(getStories);
  console.log("rawStories", rawStories);
  const data = rawStories.map(({ data: result }) => {
    console.log("result", result);
    return {
      id: result?.id,
      headline: result?.headline,
      displayName: result?.authors?.[0]?.display_name,
      sectionLabel: result?.sections?.[0]?.name,
      topicName: result?.topics?.[0]?.name,
      primaryImage: result?.byline_photo,
      publishedDate: result?.published_date,
      permaLink: result?.permalink,
    };
  });

  if (!streamData && !data) {
    return {
      props: {
        data: [],
      },
    };
  }

  return {
    props: {
      data: null,
    },
  };
}
