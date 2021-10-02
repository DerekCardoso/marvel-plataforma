import React from "react";
import ReactDOM from "react-dom";

import "../components/Layout/Card.scss";
import Card from "../components/Layout/card"

import wanda from "../img/personagens/wanda.jpg"
import hulk from "../img/personagens/hulk.jpg"
import ironman from "../img/personagens/homemferro.jpg"


export default function Personagens() {
    return (
        <div className="wrapper">
            <Card
                img={wanda}
                title="Wanda Maximoff"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />

            <Card
                img={hulk}
                title="Bruce Banner"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />

            <Card
                img={ironman}
                title="Tony Stark"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
        </div>
    );
}