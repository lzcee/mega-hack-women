import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import MatchResults from '../components/MatchResults';

import { getToken, getId } from "../services/auth";

const SmartMatchResults = () => {

    const history = useHistory();
    const location = useLocation();
    const type = "smart";

    const [cardsList, setCardsList] = useState(null);

    useEffect(() => {

        var business = location.state ? location.state.business !== "default" ? location.state.business : null : null;
		var segment = location.state ? location.state.segment !== "default" ? location.state.segment : null : null;

        var token = getToken();
        var id = getId();

        axios
        .put(
            `http://localhost:5000/api/full_match/${id}`,
            {
                auth: {
                    username: token,
                    password: "x",
                },
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    business: business,
                    area: segment
                }
            }
        )
        .then((res) => {
            setCardsList(res.data);
        })
        .catch((err) => {
            history.push("/match");
        });


    }, [history, location.state])

    return (
        <div className="smartMatchResults">
            <MatchResults cardsList={cardsList} type={type}/>
        </div>
    )
}

export default SmartMatchResults;