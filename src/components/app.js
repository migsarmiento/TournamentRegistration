import React, { Component } from 'react';
import Home from './home';
import Header from "./header";
import MenuBar from "./menu-bar";
import Footer from "./footer";
import FencersList from "./fencers-list";


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MenuBar />

                <Footer/>
            </div>
        );
    }
}