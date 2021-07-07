import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { PomoControlHedaer } from '../views/components'
import * as Pages from '../views/pages';
import { NotFound } from '../views/pages'
import { CustomRoute } from './CustomRoute';
import { Routes } from './Routes';

export function App() {

  return (
    <div className="App">
        <Switch>
          {Routes.map(r => (
            <CustomRoute 
              key={`ignored-${r.componentName}`}
              path={r.path}
              exact
              render={props => {
                const Component = Pages[r.componentName];
                return <Component key={props.match.params.pageId} {...props} />
              }}
            />
          ))}

          <Route path="*" exact component={() => <NotFound />}/>
          
          <Route path="/test">
            <PomoControlHedaer title="Test" />
          </Route>
        </Switch>
    </div>
  );
}