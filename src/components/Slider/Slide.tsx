import React from "react";
import { SlideProps } from "../../../types";

export const Slide = (props: SlideProps) => {
  return (

    ////// testing if data populates
    <div className="slides">
      <div id="slide-1">
        <a href={props.permaLink}>
          <img src={props.primaryImage} alt="" />
        </a>
        <h1>{props.headline}</h1>
        <span>
          {props.publishedDate} - {props.sectionLabel}
        </span>
      </div>
      <div id="slide-2">2</div>
      <div id="slide-3">3</div>
      <div id="slide-4">4</div>
      <div id="slide-5">5</div>
    </div>
  );
};
