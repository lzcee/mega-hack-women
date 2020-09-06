import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MatchResults from '../components/MatchResults';

const ManualMatchResults = () => {

    const location = useLocation();
    const type = "manual";

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

    })

    return (
        <div className="manualMatchResults">
            <MatchResults cardsList={cardsList} type={type}/>
        </div>
    )
}

export default ManualMatchResults;