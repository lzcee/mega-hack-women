import React from 'react';
import { Link } from "react-router-dom";

import BtnGoBack from "../BtnGoBack";

import './style.css';

const FoundMentor = ({ area, business, desc, id, name }) => {

    const chatPath = `/chat/${id}`;

    return (
        <section className="foundMentor container">
            <BtnGoBack/>
            <h2 className="title">Mentora</h2>
            <div className="mentor">
                <img className="img" src={require("./avatar.png")} alt={name} />
                <h3 className="name">{name}</h3>
                <p className="description">{desc}</p>
                <div className="contentWrapper">
                    <div className="item">
                        <p className="type">{business ? business : "Qualquer"}</p>
                        <p className="class">Modelo de Negócio</p>
                    </div>
                    <div className="item">
                        <p className="type">{area ? area : "Qualquer"}</p>
                        <p className="class">Ramo</p>
                    </div>
                </div>
            </div>
            <div className="btnWrapper">
                <Link className="btn" to={{ pathname: chatPath, state: { id: id, name: name } }}>
                    Chamar {name} pra marcar a mentoria
                </Link>
            </div>
        </section>
    )
}

export default FoundMentor;
