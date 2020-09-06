import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const MatchCard = ({ name, business, segment }) => {
	return (
		<div className="matchCard">
			<img className="img" src={require("./avatar.png")} alt={name} />
			<div className="contentWrapper">
				<h3 className="name">{name}</h3>
				<p className="description">Modelo de Negócio: {business}</p>
				<p className="description">Segmento: {segment}</p>
			</div>
			<Link
				className="link"
				to={{
					pathname: "/match/mentora",
					state: { name: name, business: business, segment: segment },
				}}
			></Link>
		</div>
	);
};

export default MatchCard;
