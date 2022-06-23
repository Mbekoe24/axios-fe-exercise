import React from "react";
import { SlideProps } from "./types";
import "../Slider/Slider.module.scss";

export const Slide = (props: SlideProps) => {
  return (
    <div className="slides">
      <div id={props.htmlId}>
        <a href={props.permaLink}>
          <img src={props.primaryImage} alt="" />
        </a>
        <h1>{props.headline}</h1>
        <span>
          {props.publishedDate} - {props.topicName}
        </span>
      </div>
    </div>
  );
};
