import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import MatchResults from "../components/MatchResults";

import { getToken, getId, logout } from "../services/auth";

const ManualMatchResults = () => {
	const location = useLocation();
	const history = useHistory();
	const type = "manual";

	const [cardsList, setCardsList] = useState([]);

	useEffect(() => {
		var token = getToken();
        var id = getId();

		// axios
		// 	.get(
        //         `http://localhost:5000/api/profile/simple_match/${id}`,
		// 		{
		// 			auth: {
		// 				username: token,
		// 				password: "x",
        //             },
        //             data: {
        //                 business: null,
        //                 area: null
        //             }
        //         }
		// 	)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		setCardsList(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		history.push("/match");
        // 	});
        
	}, []);

	return (
		<div className="manualMatchResults">
			<MatchResults cardsList={cardsList} type={type} />
		</div>
	);
};

export default ManualMatchResults;
