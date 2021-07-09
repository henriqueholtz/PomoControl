import React, { useState, useMemo} from 'react';
import { Route, Switch } from 'react-router-dom'
import * as Pages from '../views/pages';
import { NotFound, Test } from '../views/pages'
import { CustomRoute } from './CustomRoute';
import { Routes } from './Routes';
import { setTitle } from '@pomocontrol-utils'
import { Layout } from '@pomocontrol-layouts'
 
export function App() {
  const [pages, setPages] = useState([]);

  const pagesMemo = useMemo(() => {
    console.warn('Loading all routes.');
    const internalPages = Object.keys(Routes).map(value => ({
        title: Routes[value].title, 
        paths: Routes[value].path
    }));
    setPages(internalPages);
  }, [Pages]);
  
  return (
    <div className="App">
      {pagesMemo}
      <Switch>
            {Routes.map(r => (

              <Layout pages={pages}>
                <CustomRoute 
                  key={r.componentName}
                  path={r.path}
                  exact
                  render={props => {
                    const Component = Pages[r.componentName];
                    console.log('x', r)
                    
                    setTitle(r.title)
                    return <Component key={props.match.params.pageId} {...props} />
                    }}
                  />
                </Layout>
            ))}

            <Route path="*" exact component={() => <NotFound />}/>
            
            <Route path="/test">
              <Test />
            </Route>
      </Switch>
    </div>
  );
}