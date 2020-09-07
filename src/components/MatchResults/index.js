import React from "react";
import { Link } from "react-router-dom";

import BtnGoBack from "../BtnGoBack";
import MatchCard from "../MatchCard";
import { ReactComponent as SmartIcon } from "./match-results.svg";
import { ReactComponent as FilterIcon } from "./filter.svg";

import "./style.css";

const MatchResults = ({ cardsList, type }) => {

    const cards = cardsList.map((card) => (
        <MatchCard key={card.id} {...card} />
    ));

	return (
		<section className="matchResults container">
            <div className="topBar">
                <BtnGoBack />
                {type === "manual" && (
                    <>
                        <h2 className="manualTitle">Compatíveis</h2>
                        <Link
                            className="filter"
                            to={{ pathname: "/match/manual/filtrar" }}
                        >
                            <FilterIcon />
                        </Link>
                    </>
                )}
            </div>
			{type === "smart" && (
				<div className="contentMatchWrapper">
					<SmartIcon className="smartIcon" />
					<h2 className="smartTitle">
						Uhuuul! Encontramos {cardsList.length} {cardsList.length === 1 ? 'mentora' : 'mentoras'} que mais
						{cardsList.length === 1 ? ' combina' : ' combinam'} com o seu perfil!
					</h2>
				</div>
			)}
			{type === "manual" && (
                <Link
                    className="btnFilter"
                    to={{ pathname: "/match/manual/filtrar" }}
                >
                    Filtrar melhor os resultados
                </Link>
			)}
			<div className="cardsWrapper">{cards}</div>
		</section>
	);
};

export default MatchResults;
