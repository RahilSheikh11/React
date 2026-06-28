import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {

    render(<Contact/>);
    const heading = screen.getByRole("heading");
    //Assertion below
    expect(heading).toBeInTheDocument();
})

test("Should load button inside component", () => {

    render(<Contact/>);
    //Querying
    const Button = screen.getByText("Submit");
    //Assertion below
    expect(Button).toBeInTheDocument();
})

test("Should load both textbox inside component", () => {

    render(<Contact/>);
    //Querying
    const Textbox = screen.getAllByRole("textbox");
    //Assertion below
    expect(Textbox.length).toBe(2);
})