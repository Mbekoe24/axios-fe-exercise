import React from "react";
import styles from "./Slider.module.scss";
import { SliderProps, ApiResponse } from "./types";
import { Slide } from "../Slide";
import "./Slider.module.scss";
const Slider = ({ data }: SliderProps) => {
  console.log(data, "22");
  return (
    <>
      <h1>More from Axios.com</h1>
      <div className={styles["slider"] + " news-slider"}>
        <div className="slides">
          {data && (
            <>
              {data?.map((item: ApiResponse, index) => {
                console.log(item.headline);
                return (
                  <Slide
                    key={item.id}
                    htmlId={`slide-${index + 1}`}
                    headline={item.headline}
                    displayName={item.displayName}
                    // sectionLabel={item.sectionLabel}
                    topicName={item.topicName}
                    // socialImage={item.socialImage}
                    altText={item.altText}
                    publishedDate={item.publishedDate}
                    primaryImage={item.primaryImage}
                    permaLink={item.permaLink}
                  />
                );
              })}
            </>
          )}
        </div>
        {data.map((d, i) => {
          return <a key={i} href={`#slide-${i + 1}`}>{`${i + 1}`}</a>;
        })}
      </div>
    </>
  );
};

export default Slider;
