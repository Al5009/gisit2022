import React, {Component} from 'react';
import './../style/head.css'
import './../style/body-karta.css'
import MainMap from "./../components/MainMap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

class Karta extends Component {
    render() {
        return (
            <div className="body">
                <div className="spisok">
                    <h2 style={{fontFamily: 'NS-r', marginTop: '2vh'}}>Список</h2>
                    <br/>
                    <br/>
                    <a href="App.js" className="kins">FFF</a>
                    <br/>
                    <a href="index.js" className="kins">Карта мерзлотных ландшафтов</a>
                </div>
                <div className="kart"><MainMap /></div>
            </div>
        );
    }
}

export default Karta;