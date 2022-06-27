// import React from "react";
import { render } from "@testing-library/react";
import React from "react";
import Slider from "../Slider";

describe("Slider", () => {
  it("it matches snapshot", () => {
    const { container } = render(
      <Slider
        data={[
          {
            htmlId: "slide",
            headline: "{item.headline}",
            displayName: "{item.displayName}",
            topicName: "{item.topicName}",
            altText: "{item.altText}",
            publishedDate: "{item.publishedDate}",
            primaryImage: "{item.primaryImage}",
            permaLink: "{item.permaLink}",
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
  // it("Button takes us to axios page", () => {
  //   render(<button></button>);
  // });
});
