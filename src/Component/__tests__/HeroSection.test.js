import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../Pages/Home/HeroSection/HeroSection";

// Mock the AOS.init function
jest.mock("aos", () => ({
  init: jest.fn(),
}));

describe("HeroSection Component", () => {
  test("renders HeroSection component", () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    // Check if the main content of the component is rendered
    const mainContent = screen.getByText('Be a Confident English Speaker');
    expect(mainContent).toBeInTheDocument();


  });

  // You can add more test cases for other scenarios and interactions
});

