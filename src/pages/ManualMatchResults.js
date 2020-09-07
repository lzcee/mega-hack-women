import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import MatchResults from "../components/MatchResults";

import { getToken } from "../services/auth";

const ManualMatchResults = () => {
	const location = useLocation();
	const history = useHistory();
	const type = "manual";

	const [cardsList, setCardsList] = useState([]);

	useEffect(() => {

		var token = getToken();
		var business = location.state ? location.state.business !== "default" ? location.state.business : null : null;
		var segment = location.state ? location.state.segment !== "default" ? location.state.segment : null : null;
		
		axios
			.put(
                "http://localhost:5000/api/filter_users",
				{
					auth: {
						username: token,
						password: "x",
                    },
                    data: {
                        business: business,
                        area: segment
					},
					headers: {
                        "Content-Type": "application/json",
                    }
                }
			)
			.then((res) => {
				setCardsList(res.data);
			})
			.catch((err) => {
				history.push("/match");
        	});
        
	}, []);

	return (
		<div className="manualMatchResults">
			<MatchResults cardsList={cardsList} type={type} />
		</div>
	);
};

export default ManualMatchResults;
