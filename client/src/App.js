import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogInPage from './registration/pages/LogInPage';
import RegisterationPage from './registration/pages/RegisterationPage';
import ForgotPasswordPage from './registration/pages/ForgotPasswordPage'
import CheckEmailPage from './registration/pages/CheckEmailPage'
import Homepage from './homepage/Homepage';
import ProfileSetupPage from './onboarding/ProfileSetupPage';
import Categories from './categories/Categories';
import RecommendationCard from './categories/components/RecommendationCard';
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
            {/* <RecommendationCard
            photoUrl="../images/painting.jpeg"
            title="Electrician"
        /> */}
        </div>
    )
}