import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Slider from "../components/Slider/Slider";
import * as React from "react";

describe("Slider on page", () => {
  it("it matches snapshot", () => {
    const { container } = render(
      <Slider
        data={[
          {
            htmlId: "",
            headline: "",
            displayName: "",
            topicName: "",
            altText: "",
            publishedDate: "",
            primaryImage: "",
            permaLink: "",
          },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("it shows Vist axios button on page snapshot", async () => {
    <Slider
      data={[
        {
          htmlId: "",
          headline: "",
          displayName: "",
          topicName: "",
          altText: "",
          publishedDate: "",
          primaryImage: "",
          permaLink: "",
        },
      ]}
    />;

    const button = await screen.findByText("Visit Axios.com");
    expect(button).toBeInTheDocument();
    user.click(button);
    expect(button).toBeEnabled();
  });
});
