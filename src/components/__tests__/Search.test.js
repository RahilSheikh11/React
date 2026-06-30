import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/MockResList.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>{
return Promise.resolve({
    json: () => {
        return Promise.resolve(MOCK_DATA);
    },
});
});

it("Should just render the body component", async () => {
   await act(async() => render(
        <Provider store ={AppStore}>
        <BrowserRouter>
        <Body />
        </BrowserRouter>
        </Provider>
));

    const btn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput,{target: {value: "pizza"}});

    fireEvent.click(btn);

    const cards = screen.getAllByTestId("rescard");

    expect(cards.length).toBe(2);
})