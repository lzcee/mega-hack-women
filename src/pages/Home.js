import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import NavigationMenu from "../components/NavigationMenu";
import SearchMentoring from "../components/SearchMentoring";
import PartnershipResearch from "../components/PartnershipResearch";

import { getToken, getId, logout } from "../services/auth";

const Home = () => {
	const history = useHistory();

	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [segment, setSegment] = useState("");
	const [formal, setFormal] = useState("");
	const [schedule, setSchedule] = useState("");
	
	const info = {
		name: name,
		desc: desc,
		segment: segment,
		formal: formal,
		schedule: schedule
	}
    
	useEffect(() => {
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
				setName(res.data.name);
				setSegment(res.data.area);
				setDesc(res.data.desc);
				setFormal(res.data.formal);
				setSchedule(res.data.schedule);
			})
			.catch((err) => {
				logout();
				history.push("/login");
            });

	}, [history]);

	return (
		<div className="home fullScreen screenBackground">
			<NavigationMenu {...info}/>
			<SearchMentoring name={name} />
			<PartnershipResearch />
		</div>
	);
};

export default Home;
