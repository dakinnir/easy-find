import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogInPage from './registration/views/LogInPage';
import RegisterationPage from './registration/views/RegisterationPage';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage'
import CheckEmailPage from './registration/views/CheckEmailPage'


export default function App(){
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={RegisterationPage} />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/forgot-password" component={ForgotPasswordPage} />
                    <Route path="/email-check" component={CheckEmailPage} />
                </Switch>
            </div>
        </Router>
    )
}