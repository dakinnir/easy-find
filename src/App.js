import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CheckEmailPage from './registration/views/CheckEmailPage';
import CreateNewPasswordPage from './registration/views/CreateNewPasswordPage';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage'
import SuccessfulRecoveryPage from './registration/views/SuccessfulRecoveryPage';
import LogInPage from './registration/views/LogInPage';

export default function App(){
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={SuccessfulRecoveryPage} />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/email-check" component={CheckEmailPage} />
                </Switch>
            </div>
        </Router>
    )
}