
import React from "react";
import "./Slider.scss"
import { SliderProps, SlideProps  } from "../../../types";
import { Slide } from "./Slide";

const Slider = ({data}: SliderProps) => {
  return (

  //     <a href="#slide-1">1</a>
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
                permaLink={item.permaLink}
                publishedDate={item.published_date}
                imageURL={item.image_url}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Slider;



