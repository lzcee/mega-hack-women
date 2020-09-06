import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const MatchCard = ({ name, business, segment }) => {
	return (
		<div className="matchCard">
			<img className="img" src={require("./avatar.png")} alt={name} />
			<div className="contentWrapper">
				<h3 className="name">{name}</h3>
				<p className="description">Tipo de negócio: {business}</p>
				<p className="description">Ramo: {segment}</p>
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
