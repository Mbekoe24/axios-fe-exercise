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
const fetchContentUrls = async () => {
  let result, resp;
  try {
    resp = await axios.get("https://api.axios.com/api/render/stream/content/");
    result = resp.data.results;
  } catch (_error) {
    result = [];
  }
  return result;
};
const formatStories = (rawStories = []) => {
  return rawStories.map((result) => {
    if (result !== null) {
      return {
        id: result.id,
        headline: result.headline,
        displayName: getDisplayName(result),
        altText: getAltText(result),
        topicName: getTopicName(result),
        primaryImage: getPrimaryImage(result),
        publishedDate: result.published_date,
        permaLink: result.permalink,
      };
    }
  });
};
const fetchStoriesData = async (contentUrlList = []) => {
  let result;
  const contentPromiseList = contentUrlList.map((id) =>
    axios.get(`https://api.axios.com/api/render/content/${id}`)
  );
  result = await Promise.all(contentPromiseList);
  return result.map((resp) => resp.data);
};
const getAltText = (data) => {
  let result = "";
  if (data.primary_image !== null) {
    result = data.primary_image.alt_text;
  } else if (data.social_image !== null) {
    result = data.social_image.alt_text;
  }
  return result;
};
const getDisplayName = (data) => {
  let result = "";
  if (data.authors.length !== 0) {
    result = data.authors[0].display_name;
  }
  return result;
};
const getPrimaryImage = (data) => {
  let result = "";
  if (data.primary_image !== null) {
    result = data.primary_image.base_image_url;
  } else if (data.social_image !== null) {
    result = data.social_image.base_image_url;
  }
  return result;
};
export const getServerSideProps = async () => {
  let contentUrlList, data, rawStories, result;
  contentUrlList = await fetchContentUrls();
  rawStories = await fetchStoriesData(contentUrlList);
  console.log(rawStories, "my raw stories");
  data = formatStories(rawStories);
  result = {
    props: {
      data: data,
    },
  };
  return result;
};
const getTopicName = (data) => {
  let result = "";
  if (data.topics.length !== 0) {
    result = data.topics[0].name;
  } else if (data.audience !== null) {
    result = data.audience.name;
  }
  return result;
};
