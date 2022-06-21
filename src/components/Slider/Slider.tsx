
import React from "react";
import "./Slider.scss"
import { SliderProps, SlideProps  } from "../../../types";
import { Slide } from "./Slide";

const Slider = ({data}: SliderProps) => {
  return (
// loop through to create a link each
  // <a href="#slide-1">1</a>
  // <a href="#slide-2">2</a>
  // <a href="#slide-3">3</a>
  // <a href="#slide-4">4</a>
  // <a href="#slide-5">5</a>
    <div className="slider">
      
      {data && (
        <>
          {data?.map((item: SlideProps) => {
          
            console.log(item.headline);
            return (
              <Slide
                key={item.key}
                headline={item.headline}
                displayName={item.displayName}
                sectionLabel={item.sectionLabel}
                publishedDate={item.publishedDate}
                primaryImage={item.primaryImage}
                permaLink={item.permaLink}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Slider;



