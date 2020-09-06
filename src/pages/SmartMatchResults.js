import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MatchCard from '../components/MatchCard';

const SmartMatchResults = () => {

    const location = useLocation();

    const card = {
        name: "Nome Sobrenome",
        segment: location.state.segment,
        business: location.state.business,
    }

    useEffect(() => {

        var business = location.state.business;
        var segment = location.state.segment

    })

    return (
        <div className="smartMatchResults fullScreen container">
            <MatchCard {... card}/>
        </div>
    )
}

export default SmartMatchResults;