import React, {Component} from "react";
import './style/head.css'
import MainMap from "./components/MainMap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Karta from './page/Karta.js';
import Reg from './page/Reg.js';

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="head" style={{position: 'relative', zIndex: 1}}>
                    <button className="tripol" style={{display: 'none'}}></button>
                    <div className="logo"></div>
                    <div className="vline"></div>
                    <div className="strel">
                        <a href="App.js" className="h5">Карты</a>
                    </div>
                    <a className="ling" href="../index.js">Регистрация</a>
                </div>

                <div className="foot"></div>

                <Router>
                    <Routes>
                        <Route path="/" elements={<Karta/>} />
                        <Route path="/Reg" elements={ <Reg/> } />
                    </Routes>
                </Router>
            </>
        )
    }
}