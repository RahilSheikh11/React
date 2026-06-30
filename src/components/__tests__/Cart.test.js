import { render } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MockData from "../MockData";

global.fetch = jest.fn(() => 
    Promise.resolve({
    json: () => 
        Promise.resolve(MockData), 
   })
)

it("Should load Restaurant component",async () =>{
   await act (async () => render(<RestaurantMenu />));

})