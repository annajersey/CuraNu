import React from "react";
import {shallow} from "enzyme";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import App from "./App";

describe("App component", () => {
    const AppComponent = shallow(<App />);
    it("should render Header", () => {
        expect(AppComponent.find(Header)).toHaveLength(1);
    });

    it("should render Main Menu", () => {
        expect(AppComponent.find(MainMenu)).toHaveLength(1);
    });
});
