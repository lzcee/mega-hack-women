import React from 'react';
import { Link } from 'react-router-dom';

import BtnGoBack from '../BtnGoBack';
import { ReactComponent as IconMatch } from "./match-mentoring.svg";

import './style.css';

const MatchMentoring = () => {
    return (
        <section className="matchMentoring container">
            <BtnGoBack />
            <h2 className="title">Match de Mentorias</h2>
            <IconMatch className="icon"/>
            <Link className="btn color" to={{ pathname: "/match/inteligente/filtrar" }}>
				Match Inteligente
			</Link>
            <Link className="btn" to={{ pathname: "/match/manual" }}>
				Explorar Manualmente
			</Link>
        </section>
    )
}

export default MatchMentoring
