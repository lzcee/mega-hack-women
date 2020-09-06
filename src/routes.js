import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import Onboarding from "./pages/Onboarding";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Match from "./pages/Match";

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
				<PrivateRoute path="/home" component={Home} />
				<PrivateRoute path="/chat" component={Home} />
				<PrivateRoute path="/comunidade" component={Home} />
				<PrivateRoute path="/perfil" component={Home} />
				<PrivateRoute path="/match" component={Match} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
