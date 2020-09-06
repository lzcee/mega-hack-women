import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as IconHome } from "./nav-home.svg";
import { ReactComponent as IconChat } from "./nav-chat.svg";
import { ReactComponent as IconCommunity } from "./nav-community.svg";
import { ReactComponent as IconProfile } from "./nav-profile.svg";

import './style.css';

const NavigationMenu = () => {
	const isActive = (match, location) => {
		return match ? true : false;
	};

	return (
		<nav className="navMenu">
            <ul className="menuItems">
                <li className="item">
                    <IconHome />
                    <NavLink to="/home" isActive={ (match, location) => isActive(match, location)}>
                        Início
                    </NavLink>
                </li>
                <li className="item">
                    <IconChat />
                    <NavLink to="/chat" isActive={ (match, location) => isActive(match, location)}>
                        Chat
                    </NavLink>
                </li>
                <li className="item">
                    <IconCommunity />
                    <NavLink to="/comunidade" isActive={ (match, location) => isActive(match, location)}>
                        Comunidade
                    </NavLink>
                </li>
                <li className="item">
                    <IconProfile/>
                    <NavLink to="/perfil" isActive={ (match, location) => isActive(match, location)}>
                        Eu
                    </NavLink>
                </li>
            </ul>
		</nav>
	);
};

export default NavigationMenu;
