import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import { Switch,Route } from 'react-router';

const App = () => {
    return (  
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/cart" exact component={CartPage} />
                <Route path="/:id" component={ItemPage} />
            </Switch>
        </div>
    )
}

export default App;