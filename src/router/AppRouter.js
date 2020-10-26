import React from 'react';
import { 
    BrowserRouter as Router, 
    Redirect, 
    Route, 
    Switch 
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import RecipePage from '../pages/RecipePage';
import SearchPage from '../pages/SearchPage';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/view/:mealId" component={ RecipePage } />
                    <Route exact path="/search/:meal" component={ SearchPage } />

                    <Redirect to="/" />
                </Switch>

            </div>
        </Router>
    )
}


export default AppRouter;