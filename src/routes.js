import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import Onboarding from "./pages/Onboarding";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Match from "./pages/Match";
import SmartMatchFilter from "./pages/SmartMatchFilter";
import SmartMatchResults from "./pages/SmartMatchResults";
import ManualMatchFilter from "./pages/ManualMatchFilter";
import ManualMatchResults from "./pages/ManualMatchResults";
import MentorMatch from "./pages/MentorMatch";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{ pathname: "/login", state: { from: props.location } }}
				/>
			)
		}
	/>
);

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Onboarding} />
				<Route path="/cadastro" exact={true} component={Register} />
				<Route path="/login" exact={true} component={Login} />
				<PrivateRoute path="/home" exact={true} component={Home} />
				<PrivateRoute path="/chat" exact={true} component={Home} />
				<PrivateRoute path="/comunidade" exact={true} component={Home} />
				<PrivateRoute path="/perfil" exact={true} component={Profile} />
				<PrivateRoute path="/match" exact={true} component={Match} />
				<PrivateRoute path="/match/inteligente/filtrar" exact={true} component={SmartMatchFilter} />
				<PrivateRoute path="/match/inteligente" exact={true} component={SmartMatchResults} />
				<PrivateRoute path="/match/manual/filtrar" exact={true} component={ManualMatchFilter} />
				<PrivateRoute path="/match/manual" exact={true} component={ManualMatchResults} />
				<PrivateRoute path="/match/mentora" exact={true} component={MentorMatch} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
