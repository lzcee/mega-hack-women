import React from 'react';
import { useLocation } from "react-router-dom";

import FoundMentor from "../components/FoundMentor";

const MentorMatch = () => {

    const location = useLocation();
    const mentor = location.state;

    return (
        <div className="mentorMatch">
            <FoundMentor {... mentor} />
        </div>
    )
}

export default MentorMatch;