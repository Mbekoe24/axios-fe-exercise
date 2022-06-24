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
  const handleClick = () => {
    window.open(props.permaLink);
  };
  return (
    <div id={props.htmlId}>
      <a href={props.permaLink} target="_blank" rel="noopener noreferrer">
        <img src={props.primaryImage} alt={props.altText} />
      </a>{" "}
      <div className="info-box">
        <button
          onClick={handleClick}>
          Go deeper
        </button>
        <p>{props.headline}</p>
        <span>
          <time>{formattedDate}</time> - {props.topicName}
        </span>
      </div>
    </div>
  );
};
