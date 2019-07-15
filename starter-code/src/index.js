import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const sayHello = (
  <div>
    <div id="logo">
      <img src="/images/ironhack-logo.svg" />
      <img src="/images/menu-top.svg" />
    </div>

    <div id="landing-page">
      <h1>
        Say hello to <br />
        ReactJS!
      </h1>
      <h2>
        You will learn a Frontend
        <br /> framework from scratch, to become <br />a Ninka Developer
      </h2>
      <button> Awesome! </button>
    </div>

    <div id="text-container">
      <div id="content-list">
        <img src="../images/icon1.png" />
        <h2> Declarative </h2>
        <h4> React makes it painlesso create interactive UIS</h4>
      </div>

      <div id="content-list">
        <img src="../images/icon2.png" />
        <h2> Components </h2>
        <h4> React makes it painlesso create interactive UIS</h4>
      </div>

      <div id="content-list">
        <img src="../images/icon3.png" />
        <h2> Single-Way </h2>
        <h4> React makes it painlesso create interactive UIS</h4>
      </div>

      <div id="content-list">
        <img src="../images/icon4.png" />
        <h2> JSX </h2>
        <h4> React makes it painlesso create interactive UIS</h4>
      </div>
    </div>
  </div>
);

ReactDOM.render(sayHello, document.getElementById("startpage"));
