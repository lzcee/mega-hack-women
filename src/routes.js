import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Onboarding from './pages/Onboarding';
import Register from './pages/Register';
import Login from './pages/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Onboarding} />
                <Route path="/cadastro" exact={true} component={Register} />
                <Route path="/login" exact={true} component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;