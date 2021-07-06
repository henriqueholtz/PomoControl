import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom'

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={["", "/", "/home"]}>
            <h1>Home</h1>
          </Route>
          <Route path="/test">
            <h1>Test</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}