import React from 'react';
import { Route, Switch } from 'react-router-dom'
import * as Pages from '../views/pages';
import { NotFound, Test } from '../views/pages'
import { CustomRoute } from './CustomRoute';
import { Routes } from './Routes';
// import { Util } from '../utils'

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
                console.log('x', r)
                
                // Util('y')
                return <Component key={props.match.params.pageId} {...props} />
              }}
            />
          ))}

          <Route path="*" exact component={() => <NotFound />}/>
          
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
    </div>
  );
}