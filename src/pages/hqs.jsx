import React from "react";
import ReactDOM from "react-dom";

import "../components/Layout/Card.scss";
import Card from "../components/Layout/card"

import wolverine from "../img/quadrinhos/wolverine.jpg"
import capitao from "../img/quadrinhos/capamerica.jpg"
import secretwars from "../img/quadrinhos/secretwars.jpg"



export default function Hqs() {
    return (
        <div className="wrapper">
            <Card
                img={wolverine}
                title="Wolverine"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />

            <Card
                img={capitao}
                title="Capitão América"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />

            <Card
                img={secretwars}
                title="Vingadores: Guerra Secreta"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
        </div>
    );
}