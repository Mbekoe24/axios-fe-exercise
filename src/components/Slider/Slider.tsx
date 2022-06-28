import Slide from "../Slide";
import React from "react";
import { SliderProps, ApiResponse } from "./types";

const Slider = ({ data }: SliderProps) => {
  const handleClick = () => {
    window.open("https://www.axios.com/");
  };
  return (
    <>
      <h1 data-testid="axios-h1">More from Axios.com</h1>
      <div className=" news-slider">
        <div className="slides">
          {data && (
            <>
              {data?.map((item: ApiResponse, index) => {
                return (
                  <Slide
                    key={item.id}
                    htmlId={`slide-${index + 1}`}
                    headline={item.headline}
                    displayName={item.displayName}
                    topicName={item.topicName}
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
        <div className="pagination-container">
          {data.map((d, i) => {
            return (
              <a className="pagination" key={i} href={`#slide-${i + 1}`}>{`${
                i + 1
              }`}</a>
            );
          })}
        </div>
      </div>
      <button
        data-testid="axios-btn"
        className="axios-button"
        onClick={handleClick}
      >
        Visit Axios.com
      </button>
    </>
  );
};

export default Slider;
