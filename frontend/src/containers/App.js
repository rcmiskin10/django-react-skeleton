import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NotFound from "../components/NotFound";
import Home from "../components/Home";
import Example from "../components/Example";
import NavBar from "../components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/example" component={Example} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;