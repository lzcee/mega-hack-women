import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Onboarding from './pages/Onboarding';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Onboarding} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;