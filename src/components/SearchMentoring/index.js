import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const SearchMentoring = ({name}) => {
    return (
        <section className="searchMentoring">
            <h2 className="title">Olá, {name}!</h2>
            <Link className="btn" to={{ pathname: "/match" }}>
				Buscar Mentoria
			</Link>
        </section>
    )
}

export default SearchMentoring
