import React from "react";
import {shallow, mount} from "enzyme";
import {MemoryRouter} from "react-router";
import {Link} from "react-router-dom";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import ContactForm from "./components/ContactForm/ContactForm";

describe("App component", () => {
    const AppComponent = shallow(<App/>);

    it("should render Header", () => {
        expect(AppComponent.find(Header)).toHaveLength(1);
    });

    it("should render Main Menu", () => {
        expect(AppComponent.find(MainMenu)).toHaveLength(1);
    });

    describe("Test App routing", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/"]}>
                <App/>
            </MemoryRouter>
        );

        it("should render Dashboard for the root route", () => {
            expect(wrapper.find(Dashboard)).toHaveLength(1);
        });

        it("should render ContactForm when click on Contacts Link", () => {
            wrapper.find("nav").find(Link).simulate("click", {button: 0});
            expect(wrapper.find(ContactForm)).toHaveLength(1);
        });
    });
});
