import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogInPage from './registration/views/LogInPage';
import RegisterationPage from './registration/views/RegisterationPage';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage'


export default function App(){
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={RegisterationPage} />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/forgot-password" component={ForgotPasswordPage} />
                </Switch>
            </div>
        </Router>
    )
}