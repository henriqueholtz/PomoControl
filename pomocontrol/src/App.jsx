import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import { PomoControlHedaer } from './src/components'

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={["", "/", "/home"]}>
            <PomoControlHedaer title="Home" />
          </Route>

          <Route path={["/login", "/signin"]}>
            <PomoControlHedaer title="Login" />
          </Route>

          <Route path={["/register", "/signup"]}>
            <PomoControlHedaer title="Register" />
          </Route>
          
          <Route path="/test">
            <PomoControlHedaer title="Test" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}