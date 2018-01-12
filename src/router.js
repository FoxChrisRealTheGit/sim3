import React from 'react';
import { Route, Switch } from 'react-router-dom'

import AuthView from './components/auth view/Authview';
import DashboardView from './components/dashboard view/Dashboardview';
import ProfileView from './components/profile view/Profileview';
import SearchView from './components/search view/Searchview';

export default (
    <Switch>
        <Route exact path="/" component={AuthView}></Route>
        <Route path="/dashboard" component={DashboardView}></Route>
        <Route path="/profile" component={ProfileView}></Route>
        <Route path="/search" component={SearchView}></Route>
    </Switch>
)