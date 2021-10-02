import React from "react";
import ReactDOM from "react-dom";

import "../components/Layout/Card.scss";
import Card from "../components/Layout/card"

import capmarvel from "../img/filmes/captainmarvel.jpg";
import venom from "../img/filmes/venom.jpg";
import guerra from "../img/filmes/guerrainfinita.jpg";


export default function Filmes() {
    return (
        <div className="wrapper">
            <Card
                img={capmarvel}
                title="Capitã Marvel"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />

            <Card
                img={venom}
                title="Venom"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />

            <Card
                img={guerra}
                title="Vingadores: Guerra Infinita"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />
        </div>
    );
}