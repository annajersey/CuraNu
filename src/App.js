import React from "react";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Content from "./components/Content/Content";
import "./assets/styles.scss";

const App = () =>
    <main>
        <Header />
        <MainMenu />
        <Content />
    </main>;

export default App;
