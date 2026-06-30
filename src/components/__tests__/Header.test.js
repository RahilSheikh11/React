import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import AppStore from "../../utils/AppStore";
import Header from "../Header";
import "@testing-library/jest-dom";

it("should load header component with a login button", () => {
 render(<BrowserRouter>
 <Provider store={AppStore}>
<Header />
 </Provider>
 </BrowserRouter>
 ) 
 
 const loginButton = screen.getByRole("button", {name: "Login"});
});

it("should load header component with a login button", () => {
 render(<BrowserRouter>
 <Provider store={AppStore}>
<Header />
 </Provider>
 </BrowserRouter>
 ) 
 
 const loginButton = screen.getByRole("button", {name: "Login"});

 fireEvent.click(loginButton);

 const logoutButton = screen.getByRole("button", {name: "Logout"});

 expect(loginButton).toBeInTheDocument();
});