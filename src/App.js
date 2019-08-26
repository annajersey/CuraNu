import React from "react";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Content from "./components/Content/Content";
import "./assets/styles.scss";
import "./assets/images/favicon5.ico";

const App = () =>
    <main>
        <Header />
        <MainMenu />
        <Content />
    </main>;

export default App;
