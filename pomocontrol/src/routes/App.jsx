import React, { useState, useMemo, useEffect} from 'react';
import { Route, Switch, useHistory, BrowserRouter } from 'react-router-dom';
import * as Pages from '../views/pages';
import { NotFound, Test } from '../views/pages'
import { CustomRoute } from './CustomRoute';
import { Routes } from './Routes';
import { setTitle, Request } from '@pomocontrol-utils';
import { Layout } from '@pomocontrol-layouts';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../styles/styles.scss';
 
export function App() {
  const [pages, setPages] = useState([]);
  const [maintenance, setMaintenance] = useState(false)
  const history = useHistory();

  const pagesMemo = useMemo(() => {
    const internalPages = Object.keys(Routes).map(value => ({
      title: Routes[value].title, 
      paths: Routes[value].paths,
      hasMenu: Routes[value]?.menus?.length > 0,
      menus: Routes[value]?.menus || [],
    }));
    console.warn('Loading all routes.', internalPages);
    setPages(internalPages);
  }, [Pages]);

  useEffect(() => {
    Request.Get('health')
      .then(() => {
        setMaintenance(false);
      }).catch((ex) => {
        console.error('API is offline', ex);
        setMaintenance(true);
      })
  }, [])

  if (maintenance) {

    history.push('/maintenance');
  }
  
  return (
    <>
      {pagesMemo}
      <CssBaseline />
      <BrowserRouter>
        <Switch>
              {Routes.map(r => (

                <Layout pages={pages} key={r.id}>
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
      </BrowserRouter> 
      </>
  );
}