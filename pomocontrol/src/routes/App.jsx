import CssBaseline from '@material-ui/core/CssBaseline';
import { Layout } from '@pomocontrol-layouts';
import { setTitle, Request } from '@pomocontrol-utils';
import React, { useState, useMemo, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { NotFound, Test, Logout } from '@pomocontrol-pages';
import * as Pages from '../views/pages';
import { CustomRoute } from './CustomRoute';
// import { CustomPrivateRoute } from './CustomPrivateRoute';
import { Routes } from './Routes';

import '../styles/styles.scss';

export function App() {
    const [pages, setPages] = useState([]);
    const [maintenance, setMaintenance] = useState(false);
    // const history = useHistory(); react-router-dom

    const pagesMemo = useMemo(() => {
        const internalPages = Object.keys(Routes).map((value) => ({
            title: Routes[value].title,
            paths: Routes[value].paths,
            hasMenu: Routes[value]?.menus?.length > 0,
            menus: Routes[value]?.menus || [],
            componentName: Routes[value].componentName,
        }));
        console.warn('Loading all routes.', internalPages);
        setPages(internalPages);
    }, [Pages]);

    useEffect(() => {
        Request.Get('health')
            .then(() => {
                setMaintenance(false);
            })
            .catch((ex) => {
                console.error('API is offline', ex);
                setMaintenance(true);
            });
    }, []);

    if (maintenance) {
        console.log('Maintenance!');
        // history.push('/maintenance');
    }

    return (
        <>
            {pagesMemo}
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <CustomRoute path="/logout" exact render={() => <Logout />} />
                    {/* <CustomPrivateRoute path="/CustomPrivateRoute" exact component={<Test />} /> */}

                    {Routes.map((r) => (
                        <Layout pages={pages} key={r.id}>
                            <CustomRoute
                                key={r.componentName}
                                path={r.path}
                                exact
                                render={(props) => {
                                    const Component = Pages[r.componentName];
                                    console.log('x', Pages[r.componentName]);
                                    setTitle(r.title);
                                    return (
                                        <Component
                                            // eslint-disable-next-line react/prop-types
                                            key={props.match.params.pageId}
                                            // eslint-disable-next-line react/jsx-props-no-spreading
                                            {...props}
                                        />
                                    );
                                }}
                            />
                        </Layout>
                    ))}

                    <Route path="*" exact component={() => <NotFound />} />

                    <Route path="/test">
                        <Test />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
