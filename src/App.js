import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import LogInPage from './registration/views/LogInPage';
import RegisterationPage from './registration/views/RegisterationPage';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage'

=======
import CheckEmailPage from './registration/views/CheckEmailPage';
import CreateNewPasswordPage from './registration/views/CreateNewPasswordPage';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage'
import SuccessfulRecoveryPage from './registration/views/SuccessfulRecoveryPage';
import LogInPage from './registration/views/LogInPage';
>>>>>>> AV-48-inform-user-to-check-email-page

export default function App(){
    return(
        <Router>
            <div className="App">
                <Switch>
<<<<<<< HEAD
                    <Route exact path="/" component={RegisterationPage} />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/forgot-password" component={ForgotPasswordPage} />
=======
                    <Route exact path="/" component={SuccessfulRecoveryPage} />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/email-check" component={CheckEmailPage} />
>>>>>>> AV-48-inform-user-to-check-email-page
                </Switch>
            </div>
        </Router>
    )
}