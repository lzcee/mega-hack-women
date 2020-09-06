import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const SmartMatchResults = () => {

    const location = useLocation();

    useEffect(() => {

        var business = location.state.business;
        var segment = location.state.segment

    })

    return (
        <div className="smartMatchResults fullScreen">
        
        </div>
    )
}

export default SmartMatchResults;