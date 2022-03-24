import React from "react";
import './style/head.css'
import './style/body-karta.css'
import './style/body-reg.css'
import MainMap from "./components/MainMap";
import Header from "./Header";

function App() {
    return (
        <div>
            <div className="head" style={{position: 'relative', zIndex: 1}}>
                <button className="tripol" style={{display: 'none'}}></button>
                <div className="logo"></div>
                <div className="vline"></div>
                <div className="strel">
                    <a href="App.js" className="h5">Карты</a>
                </div>
                <a className="ling" href="../index.js">Регистрация</a>
            </div>
            {/* КАРТА КАРТА КАРТА КАРТА */}
            {/*<div className="body">*/}
            {/*    <div className="spisok">*/}
            {/*        <h2 style={{fontFamily: 'NS-r', marginTop: '2vh'}}>Список</h2>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <a href="App.js" className="kins">FFF</a>*/}
            {/*        <br/>*/}
            {/*        <a href="index.js" className="kins">Карта мерзлотных ландшафтов</a>*/}
            {/*    </div>*/}
            {/*    <div className="kart"><MainMap /></div>*/}
            {/*</div>*/}
            <div className="body1">
                <div className="derevo"></div>
                <form>
                    <h1 style={{fontFamily: 'NS', color: '#FFFFFF', marginTop: '17vh'}}>Регистрация</h1>
                    <p style={{fontFamily: 'NS-r', color: '#FFFFFF'}}>Будь в центре событий</p>
                    <p className="t-int">Почта</p>
                    <input className="inp" placeholder="Введите почту"/>
                    <p className="t-int">Пароль</p>
                    <input className="inp" placeholder="Введите пароль"/>
                    <button style={{background: '#F15522', fontFamily:'NS', boxSizing: 'border-box', borderRadius: '10px', height: '7vh', width:'30vw', border: 0, marginTop:'4vh', fontSize: 20, color: '#FFFFFF'}}>Зарегестрироваться</button>
                </form>
            </div>


            <div className="foot"></div>


        </div>
    );
}

export default App;
