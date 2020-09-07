import React, { useEffect } from 'react';
import axios from "axios";

import NavigationMenu from "../components/NavigationMenu";
import ProfileCard from "../components/ProfileCard";
import ProfileButton from "../components/ProfileButton";

import { useLocation, useHistory } from "react-router-dom";
import { getToken, getId, logout } from "../services/auth";

const Profile = () => {

    const location = useLocation();
    const history = useHistory();
    var infos = location.state ? location.state : {};

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
        
    }, [infos, history])

    return (
        <div className="profile fullScreen screenBackground">
            <NavigationMenu />
            <ProfileCard {... infos}/>
            {
                infos.formal &&
                <>
                    <ProfileButton type="awards" text="Conquistas" path="/perfil/conquistas"/>
                    <ProfileButton type="pointsSwap" text="Troca de pontos" path="/perfil/troca-de-pontos"/>
                </>
            }
            <ProfileButton type="logout" text="Sair" path="/login"/>
        </div>
    )

}

export default Profile;
