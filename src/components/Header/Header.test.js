import React from "react";
import {shallow} from "enzyme";
import Header from "./Header";
import HamburgerButton from "./images/hamburger.svg";

describe("Header component", () => {
    const HeaderComponent = shallow(<Header />);
    
    it("should render header tag", () => {
        expect(HeaderComponent.find("header")).toHaveLength(1);
    });

    it("should render hamburger menu button", () => {
        const mobileMenuButton = HeaderComponent.find(".mobileHide");
        expect(mobileMenuButton).toHaveLength(1);
        expect(mobileMenuButton.find(HamburgerButton)).toHaveLength(1);
    });

    it("should show/hide mobile menu on hamburger menu button click", () => {
        const menu = HeaderComponent.find("nav");
        expect(menu.hasClass("showMobileMenu")).toBeFalsy();
        HeaderComponent.find(".mobileHide").simulate("click");
        expect(menu.hasClass("showMobileMenu")).toBeTruthy();
        HeaderComponent.find(".mobileHide").simulate("click");
        expect(menu.hasClass("showMobileMenu")).toBeFalsy();
    });

    it("should render logo", () => {
        expect(HeaderComponent.find(".logo")).toHaveLength(1);
    });
});
