import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MockData from "../mocks/MockData.json";
import "@testing-library/jest-dom";

it("Should render RestauranntCard data with component", () =>{

    render(<RestaurantCard  resData={MockData}/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();

})