import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Dashboard from "./components/Dashboard/Dashboard";
import "./assets/styles.scss";
import "./assets/images/favicon5.ico";
import ContactForm from "./components/ContactForm/ContactForm";


const App = () =>
    <BrowserRouter>
        <Header />
        <MainMenu />
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/contact" component={ContactForm} />
        </Switch>
    </BrowserRouter>

export default App;
