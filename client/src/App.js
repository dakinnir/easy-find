import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogInPage from './registration/pages/LogInPage';
import RegisterationPage from './registration/pages/RegisterationPage';
import ForgotPasswordPage from './registration/pages/ForgotPasswordPage'
import CheckEmailPage from './registration/pages/CheckEmailPage'
import Homepage from './homepage/Homepage';


export default function App() {
    return(
        // <Router>
        //     <div className="App">
        //         <Switch>
        //             <Route exact path="/" component={RegisterationPage} />
        //             <Route path="/login" component={LogInPage} />
        //             <Route path="/forgot-password" component={ForgotPasswordPage} />
        //             <Route path="/email-check" component={CheckEmailPage} />
        //         </Switch>
        //     </div>
        // </Router>

        <div className='app-body'>
            <Homepage />
        </div>
    )
}