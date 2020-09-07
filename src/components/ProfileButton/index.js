import React from "react";
import { useHistory } from "react-router-dom";

import { logout } from "../../services/auth";

import "./style.css";

import { ReactComponent as IconAwards } from "./awards.svg";
import { ReactComponent as IconPoints } from "./points.svg";
import { ReactComponent as IconLogout } from "./logout.svg";

const ProfileButton = ({ type, text, path }) => {
	const history = useHistory();

	const handleButton = () => {
		if (type === "logout") {
			logout();
		}
		history.push(path);
	};

	const icon =
		type === "awards" ? (
			<IconAwards />
		) : type === "pointsSwap" ? (
			<IconPoints />
		) : type === "logout" ? (
			<IconLogout />
		) : (
			""
		);

	return (
		<button className={`btnProfile ${type}`} onClick={handleButton}>
			{icon}
			{text}
		</button>
	);
};

export default ProfileButton;
