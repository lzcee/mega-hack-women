import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MatchResults from '../components/MatchResults';

const SmartMatchResults = () => {

    const location = useLocation();
    const type = "smart";

    const cardsList = [
        {
            id: 1,
            name: "Nome Sobrenome",
            segment: "teste",
            business: "teste"
        },
        {
            id: 2,
            name: "Nome Sobrenome",
            segment: "teste",
            business: "teste"
        }
    ]

    useEffect(() => {

        var business = location.state.business;
        var segment = location.state.segment

    })

    return (
        <div className="smartMatchResults fullScreen">
            <MatchResults cardsList={cardsList} type={type}/>
        </div>
    )
}

export default SmartMatchResults;