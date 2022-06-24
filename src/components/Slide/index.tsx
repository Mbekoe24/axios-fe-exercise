import React from "react";
import { SlideProps } from "./types";
import "../Slider/Slider.module.scss";

export const Slide = (props: SlideProps) => {
  return (
  
    <div id={props.htmlId}>
      {/* {props.htmlId} */}
        <a href={props.permaLink}>
          <img src={props.primaryImage} alt="" />
        </a>
        <p>{props.headline}</p>
        <span>
          {props.publishedDate} - {props.topicName}
        </span>
      </div>
   
  );
};
