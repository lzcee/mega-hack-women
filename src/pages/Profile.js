import React, { useEffect } from 'react';
import axios from "axios";

import NavigationMenu from "../components/NavigationMenu";
import ProfileCard from "../components/ProfileCard";

import { useLocation, useHistory } from "react-router-dom";
import { getToken, getId, logout } from "../services/auth";

const Profile = () => {

    const location = useLocation();
    const history = useHistory();
    const infos = location.state ? location.state : null;

    useEffect(() => {
        
        if( !infos ) {
            var token = getToken();
            var id = getId();

            axios
                .get(`http://localhost:5000/api/users/${id}`, {
                    auth: {
                        username: token,
                        password: "x",
                    },
                })
                .then((res) => {
                    infos = {
                        name: res.data.name,
                        desc: res.data.desc,
                        segment: res.data.area,
                        formal: res.data.formal,
                        schedule: res.data.schedule
                    }
                })
                .catch((err) => {
                    logout();
                    history.push("/login");
                });
        }
        
    }, [])

    return (
        <div className="profile fullScreen screenBackground">
            <NavigationMenu />
            <ProfileCard {... infos}/>
        </div>
    )

}

export default Profile;
