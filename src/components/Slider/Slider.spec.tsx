import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Slider from "./Slider";
import * as React from "react";

const mockData = {
  htmlId: "",
  headline: "",
  displayName: "",
  topicName: "",
  altText: "",
  publishedDate: "",
  primaryImage: "",
  permaLink: "",
};

describe("<Slider />", () => {
  it("Should render correctly", () => {
    const { container } = render(<Slider data={[mockData]} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ////// actual test

  describe("Slider should have a Heading", () => {
    test("Should render heading(H1) on screen  screen", () => {
      render(<Slider data={[mockData]} />);

      const H1 = screen.getByTestId("axios-h1");
      expect(H1).toBeInTheDocument();
    });
  });

  describe("Slider component should have a buttton", () => {
    test("Should render button screen", () => {
      render(<Slider data={[mockData]} />);

      const button = screen.getByTestId("axios-btn");
      expect(button).toBeInTheDocument();
    });
  });

  describe("if user clicks button it should be enabled", () => {
    test("Should take user to axios page if button is clicked", () => {
      render(<Slider data={[mockData]} />);
      const button = screen.getByTestId("axios-btn");
      user.click(button);
      expect(button).toBeEnabled();
    });
  });
});
