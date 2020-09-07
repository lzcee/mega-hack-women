import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import MatchResults from "../components/MatchResults";

import { getToken, getId } from "../services/auth";

const SmartMatchResults = () => {

	const history = useHistory();
	const type = "smart";

	const [cardsList, setCardsList] = useState(null);

	useEffect(() => {

		var token = getToken();
		var id = getId();

		axios
			.get(`http://localhost:5000/api/profile/full_match/${id}`, {
				auth: {
					username: token,
					password: "x",
				},
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				setCardsList(res.data);
			})
			.catch((err) => {
				history.push("/match");
            });
            
	}, [history]);

	return (
		<div className="smartMatchResults">
			<MatchResults cardsList={cardsList} type={type} />
		</div>
	);
};

export default SmartMatchResults;
