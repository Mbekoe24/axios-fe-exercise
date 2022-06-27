import renderer from "react-test-renderer";
import * as React from "react";
import Slider from "../Slider";

describe("Slider", () => {
  it("it matches snapshot", () => {
    const container = renderer
      .create(
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
      )
      .toJSON();
    expect(container).toMatchSnapshot();
  });
});
