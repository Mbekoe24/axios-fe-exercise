import axios from "axios";
import { InferGetServerSidePropsType } from "next";
import React from "react";
import Slider from "../axios-fe-exercise/src/components/Slider/Slider";

export const App = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = props;

  return (
    <>
      <Slider data={data} />
    </>
  );
};
// export async function getContent() {
//   const url = "https://api.axios.com/api/render/stream/content/";
//   const data = await axios.get(url);
//   const latestStoriesIds = data.data?.results;

//   const stories = latestStoriesIds.map((id) =>
//     axios.get(`https://api.axios.com/api/render/content/${id}`)
//   );
//   const rawStories = await Promise.all(stories);
//   const storyData = rawStories.map((result) => result.data);

//   console.log(storyData);

//   if (!data && !storyData) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       storyData,
//     },
//   };
// }
export async function getServerSideProps(context) {
  const url = "https://api.axios.com/api/render/stream/content/";
  const { data: streamData } = await axios.get(url);
  const { results } = streamData;
  const getStories = results.map((id) =>
    axios.get(`${url}${id}`)
  );
  const rawStories = await Promise.all(getStories);
  const data = rawStories.map((result) => {
    return {
      key: results.id,
      headline: result.headline,
      displayName: result.authors[0].display_name,
      sectionLabel: result.sections[0].name,
      primaryImage: result.byline_photo,
      publishedDate: result.published_date,
      permaLink: result.permalink,
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
      data,
    },
  };
}
