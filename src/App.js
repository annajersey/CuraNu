import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Dashboard from "./components/Dashboard/Dashboard";
import ContactForm from "./components/ContactForm/ContactForm";
import "./assets/styles.scss";
import "./assets/images/favicon.ico";

const App = () =>
    <BrowserRouter basename={basePath}>
        <div>
            <Header/>
            <MainMenu/>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/contact" component={ContactForm}/>
                <Route path="*" component={Dashboard} />
            </Switch>
        </div>
    </BrowserRouter>;

export default App;
