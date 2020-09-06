import React from 'react';

import { ReactComponent as IconSearch } from "./partner-search.svg";

import './style.css';

const PartnershipResearch = () => {

    const handleSubmit = (event) => {

        event.preventDefault();
        
    };

    return (
        <section className="partnershipResearch">
            <IconSearch />
            <div className="formWrapper">
                <h2 className="title">Queremos saber: Você gostaria de um match para encontrar uma <strong>parceira de negócios</strong>?</h2>
                <p className="description">Seja uma parceria para abrir ou alavancar o seu negócio, você poderia encontrar aqui também.</p>
                <form className="formPartnership" method="post" onSubmit={handleSubmit}>
                    <div className="inputWrapper">
                        <input type="radio" name="partnerResearch" id="interest" checked/>
                        <label htmlFor="interest">Tenho interesse</label>
                    </div>
                    <div className="inputWrapper">
                        <input type="radio" name="partnerResearch" id="notInterested"/>
                        <label htmlFor="notInterested">Não tenho interesse</label>
                    </div>
                    <input className="btn" type="submit" value="Enviar"/>
                </form>
            </div> 
        </section>
    )

}

export default PartnershipResearch;
