import React, { useEffect, useState } from 'react';
import axios from "axios";

import BtnGoBack from "../BtnGoBack";

import './style.css';

import { getToken } from "../../services/auth";

const FoundMentor = ({ area, business, desc, id, name }) => {

    var subject = "EmpreenDelas - Interesse em Mentoria";
    var body = `Olá, ${name}! A plataforma EmpreenDelas me indicou seu contato para conversar sobre empreendedorismo, por isso estou te enviando esse e-mail :) Aguardo seu contato! Obrigada.`;
    var path = `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const [email, setEmail] = useState("");

    useEffect(() => {

        var token = getToken();

        axios
			.get(
                `http://localhost:5000/api/user_email/${id}`,
				{
					auth: {
						username: token,
						password: "x",
                    },
					headers: {
                        "Content-Type": "application/json",
                    }
                }
			)
			.then((res) => {
				setEmail(res.data);
			})
    }, [])

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
                <p>Por enquanto estamos sem o chat :( Mas você pode entrar em contato com a mentora pelo email para marcar a mentoria!</p>
                <a className="btn" href={`mailto:${email}${path}`}>
                    Entrar em contato por email
                </a>
            </div>
        </section>
    )
}

export default FoundMentor;
