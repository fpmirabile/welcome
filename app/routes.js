import React from 'react';
import { Switch, Route } from 'react-router';

import StartPage from './components/start-page/start-page.component';

export default (
    <Switch>
        <Route exact path="/" component={StartPage} />
    </Switch>
);