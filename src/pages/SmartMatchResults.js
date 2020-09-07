import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import MatchResults from '../components/MatchResults';

import { getToken, getId } from "../services/auth";

const SmartMatchResults = () => {

    const history = useHistory();
    const location = useLocation();
    const type = "smart";

    const [cardsList, setCardsList] = useState([]);

    useEffect(() => {

        var business = location.state ? location.state.business : null;
        var segment = location.state ? location.state.segment : null;

        var token = getToken();
        var id = getId();

        axios
            .get(
                `http://localhost:5000/api/profile/full_match/${id}`,
                {
                    auth: {
                        username: token,
                        password: "x",
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