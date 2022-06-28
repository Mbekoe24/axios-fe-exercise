import React from "react";
import { SlideProps } from "./types";

const Slide = (props: SlideProps) => {
  const formattedDate = new Date(props.publishedDate).toLocaleDateString(
    "en-US",
    {
      dateStyle: "long",
    }
  );

  return (
    <div id={props.htmlId}>
      <a
        data-testid="story-link"
        href={props.permaLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          data-testid="story-img"
          src={props.primaryImage}
          alt={props.altText || props.headline}
        />
      </a>
      <div className="info-box">
        <p>{props.headline}</p>
        <span>
          <time>{formattedDate}</time> - {props.topicName}
        </span>
      </div>
    </div>
  );
};
export default Slide;
