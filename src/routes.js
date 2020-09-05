import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Onboarding from './pages/Onboarding';
import Register from './pages/Register';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Onboarding} />
                <Route path="/cadastro" exact={true} component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;