import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import * as React from "react";
import Slide from ".";

const mockData = {
  key: "57a186a3-7547-45bf-852a-83019849d8d5",
  htmlId: "slide-2",
  headline: "The gamification of gambling",
  displayName: "Pete Gannon",
  topicName: "Economy & Business",
  altText:
    "Illustration of a hand of high cards in five separate mobile phones. ",
  publishedDate: "2022-06-28T21:13:23.963000Z",
  primaryImage:
    "https://images.axios.com/qM2XadizW4NmxcXRDhDPZg7ZAtQ=/fit-in/1366x1366/2022/06/28/1656438051676.jpg",
  permaLink: "https://www.axios.com/2022/06/28/the-gamification-of-gambling",
};

describe("<Slide />", () => {
  it("Should render correctly", () => {
    const { container } = render(<Slide {...mockData} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("Slide component should have an image", () => {
    test("Should render image screen", () => {
      render(<Slide {...mockData} />);

      const image = screen.getByTestId("story-img");
      expect(image).toBeInTheDocument();
    });
  });

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
