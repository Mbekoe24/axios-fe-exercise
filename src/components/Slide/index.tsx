import React from "react";
import { SlideProps } from "./types";
import "../Slider/Slider.module.scss";

export const Slide = (props: SlideProps) => {
  const formattedDate = new Date(props.publishedDate).toLocaleDateString(
    "en-US",
    {
      dateStyle: "long",
    }
  );

  return (
    <div id={props.htmlId}>
      <a href={props.permaLink} target="_blank" rel="noopener noreferrer">
        <img src={props.primaryImage} alt={props.altText} />
      </a>
      {/* <p>{props.topicName}</p> */}
      <p>{props.headline}</p>
      <span>
        <time>{formattedDate}</time>- {props.topicName}
      </span>
    </div>
  );
};
