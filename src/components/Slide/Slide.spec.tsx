import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import * as React from "react";
import Slide from ".";

const mockData = {
  key: "",
  htmlId: "",
  headline: "",
  displayName: "",
  topicName: "",
  altText: "",
  publishedDate: "",
  primaryImage: "",
  permaLink: "",
};

describe("<Slide />", () => {
  it("Should render correctly", () => {
    const { container } = render(<Slide {...mockData} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ////// Slide should have image
  describe("Slide component should have an image", () => {
    test("Should render image screen", () => {
      render(<Slide {...mockData} />);

      const image = screen.getByTestId("story-img");
      expect(image).toBeInTheDocument();
    });
  });

  ////// Slide should have link & within link it should contain an image
  describe("Slide component should have a link on the image", () => {
    test("Should render a link on the image ", () => {
      render(<Slide {...mockData} />);

      const link = screen.getByTestId("story-link");
      expect(link).toBeInTheDocument();
      expect(link).toContainHTML("img");
      user.click(link);
      expect(link).toBeEnabled();
    });
  });
});
