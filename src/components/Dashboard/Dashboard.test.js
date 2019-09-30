import React from "react";
import {shallow} from "enzyme";
import Masonry from "react-masonry-component";
import Dashboard from "./Dashboard";
import Accordion from "./Accordion/Accordion";
import Widget from "./Widget/Widget";
import PhoneSearch from "./PhoneSearch/PhoneSearch";

describe("Dashboard component", () => {

    const DashboardComponent = shallow(<Dashboard />);

    it("uses Masonry to show widgets as bricks layout", () => {
        expect(DashboardComponent.find(Masonry)).toHaveLength(1);
    });

    it("renders Accordion with default props", () => {
        expect(DashboardComponent.find(Accordion)).toHaveLength(1);
        expect(DashboardComponent.find(Accordion).prop("firstActiveItem")).toEqual(1);
        expect(DashboardComponent.find(Accordion).prop("singleOpen")).toEqual(true);
    });

    it("renders 9 widgets", () => {
        expect(DashboardComponent.find(Widget)).toHaveLength(9);
    });

    it("renders PhoneSearch", () => {
        expect(DashboardComponent.find(PhoneSearch)).toHaveLength(11);
    });

});