import axios from "axios";


export async function getContent() {
  const url = "https://api.axios.com/api/render/stream/content/";
  const data = await axios.get(url);
  const latestStoriesIds = data.data?.results;

  const stories = latestStoriesIds.map((id) =>
    axios.get(`https://api.axios.com/api/render/content/${id}`)
  );
  const rawStories = await Promise.all(stories);
  const storyData = rawStories.map((result) => result.data);

  console.log(storyData)

  try {
    if (!data && !storyData) {
      props: {
        storyData
      }
    }
  }
  catch (e) {
    return undefined;
  };
  
}

// export async function getServerSideProps(context) {
//     const { data: streamData } = await axios.get(
//         "https://api.axios.com/api/render/stream/content/"
//     );
//     const { results } = streamData;
//     const storiesToGet = results.map((id) =>
//         axios.get(`https://api.axios.com/api/render/content/${id}`)
//     );
//     const rawStoriesData = await Promise.all(storiesToGet);
//     const storiesData = rawStoriesData.map((result) => result.data);

//     if (!streamData && !storiesData) {
//         return {
//             notFound: true,
//         };
//     }

//     return {
//         props: {
//             storiesData,
//         },
//     };
// }