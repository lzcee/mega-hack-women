import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={() => <h1>Tela Inicial</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;