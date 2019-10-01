import React from "react";
import {shallow} from "enzyme";
import SideBar from "./SideBar";
import ContactForm from "./ContactForm";

describe("ContactForm component", () => {
    const ContactFormComponent = shallow(<ContactForm />);
    it("should render SideBar", () => {
        expect(ContactFormComponent.find(SideBar)).toHaveLength(1);
    });

    it("should render a form", () => {
        expect(ContactFormComponent.find("form")).toHaveLength(1);
    });

    it("should render 4 fields", () => {
        expect(ContactFormComponent.find(".field")).toHaveLength(4);
    });

    it("First block contains text field with labe for the name", () => {
        const block = ContactFormComponent.find(".field").at(0);
        expect(block.find("input").prop("type")).toEqual("text");
        expect(block.find("label").text()).toEqual("Naam");
    });

    it("Second block contains email field with label", () => {
        const block = ContactFormComponent.find(".field").at(1);
        expect(block.find("input").prop("type")).toEqual("email");
        expect(block.find("label").text()).toEqual("Email");
    });

    it("Third block contains text field with label for the topic", () => {
        const block = ContactFormComponent.find(".field").at(2);
        expect(block.find("input").prop("type")).toEqual("text");
        expect(block.find("label").text()).toEqual("Onderwerp");
    });

    it("Forth block contains textarea with label for the massage", () => {
        const block = ContactFormComponent.find(".field").at(3);
        expect(block.find("textarea")).toHaveLength(1);
        expect(block.find("label").text()).toEqual("Bericht");
    });

    it("should render a blue submit  button", () => {
        const submitButton = ContactFormComponent.find("button[type='submit']");
        expect(submitButton).toHaveLength(1);
        expect(ContactFormComponent.find("button[type='submit']").at(0).hasClass("blueButton")).toBeTruthy ();
    });
});
