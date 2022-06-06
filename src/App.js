import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage'
import SuccessfulRecoveryPage from './registration/views/SuccessfulRecoveryPage';

export default function App(){
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={ForgotPasswordPage} />
                    <Route path="/new" component={SuccessfulRecoveryPage} />
                </Switch>
            </div>
        </Router>
    )
}