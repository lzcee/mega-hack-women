import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BtnGoBack from '../BtnGoBack';
import { ReactComponent as IconFilter } from "./filter.svg";

import './style.css';

const MatchFilter = ({type}) => {

    const [business, setBusiness] = useState("default");
    const [segment, setSegment] = useState("default");

    const clearFilters = () => {
        setBusiness("default");
        setSegment("default");
    }

    return (
        <section className="matchFilter container">
            <BtnGoBack />
            { type === "smart" && 
                <h2 className="title">Match Inteligente</h2>
            }
            { type === "manual" && 
                <h2 className="title">Editar Filtro</h2>
            }
            <IconFilter className="iconFilter"/>
            { type === "smart" && 
                <p className="description">Matchs inteligentes buscam a melhor mentora para o seu perfil e seus objetivos! Verifique a seguir se esses dados correspondem ao que você espera.</p>
            }
            <form method="post">
                <div className="inputField">
                    <label htmlFor="business">Modelo de Negócio</label>
                    <div className="selectWrapper">
                        <select name="business" value={business} id="business" onChange={ e => setBusiness(e.target.value) }>
                            <option value="default">Selecione um Modelo de Negócio</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Loja">Loja</option>
                            <option value="Quiosque">Quiosque</option>
                        </select>
                    </div>
                </div>
                <div className="inputField">
                    <label htmlFor="segment">Segmento</label>
                    <div className="selectWrapper">
                        <select name="segment" value={segment} id="segment" onChange={ e => setSegment(e.target.value) }>
                            <option value="default">Selecione um Segmento</option>
                            <option value="Tecnologia">Tecnologia</option>
                            <option value="Vestuário">Vestuário</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="btnWrapper">
                { type === "smart" && 
                    <Link className="btn" to={{ pathname: "/match/inteligente", state: { business: business, segment: segment } }}>
                        Tudo certo, vamos pro match!
                    </Link>
                }
                { type === "manual" && 
                    <>
                        <Link className="btn" to={{ pathname: "/match/manual", state: { business: business, segment: segment } }}>
                            Pronto, agora sim :)
                        </Link>
                        <button className="clearAll" onClick={clearFilters} >Limpar Todos os Filtros</button>
                    </>
                }
            </div>
        </section>
    )

}

export default MatchFilter;