import axios from "axios";
import { InferGetServerSidePropsType } from "next";
import React from "react";
import Slider from "../axios-fe-exercise/src/components/Slider/Slider";

const App = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
  const { data: streamData } = await axios.get(
    "https://api.axios.com/api/render/stream/content/"
  );
  const { results } = streamData;
  const storiesToGet = results.map((id) =>
    axios.get(`https://api.axios.com/api/render/content/${id}`)
  );
  const rawStoriesData = await Promise.all(storiesToGet);
  const data = rawStoriesData.map((result) => {
    return {
      headline: result.headline,
      displayName: result.authors[0].display_name,
      section: result.sections[0].name,
      primaryImage: result.byline_photo,
      publishedDate: result.published_date,
      permaLink: result.permalink,
    };
  });

  if (!streamData && !data) {
    return {
      props: {
        storiesData: [],
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
