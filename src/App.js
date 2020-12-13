import React from 'react'
import Home from './Home/Home'
import {  Router, Switch, Route, Redirect } from 'react-router-dom'
import About from './About/About'
import history from './History'
import Cart from './Cart/Cart'
import Switcher from './Login/Switcher'
import NavBar from './NavBar/NavBar'
function App() {
  return (
    
    
      
          <Router history={history}>
            <NavBar/>
            <Switch>
              <Route exact path='/switcher' component={Switcher} />
              <Route exact path="/about" component={About} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/" component={Home} />
            
            </Switch>
          </Router>
  
  );
}

export default App;