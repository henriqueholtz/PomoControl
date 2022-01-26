import CssBaseline from '@material-ui/core/CssBaseline';
// import { setTitle } from '@pomocontrol-utils';
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { NotFound, Logout, Login, Home } from '@pomocontrol-pages';
import { CustomRoute } from './CustomRoute';

import '../styles/styles.scss';

export function App() {
    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <CustomRoute exact render={() => <Logout />} path="/logout" />
                    <CustomRoute exact render={() => <Login />} path="/login" />
                    <CustomRoute exact render={() => <Login />} path="/signin" />
                    <CustomRoute exact render={() => <Home />} path="/home" />
                    <CustomRoute exact render={() => <Home />} path="/" />
                    <CustomRoute exact render={() => <Home />} path="/dashboard" />

                    {/* <CustomPrivateRoute path="/CustomPrivateRoute" exact component={<Test />} /> */}

                    {/* {Routes.map((r) => (
                        <>
                            {r?.paths?.map((path) => (
                                <>
                                    <CustomRoute
                                        key={`${r.componentName}${path}`}
                                        path={path}
                                        exact
                                        render={(props) => {
                                            const Component = Pages[r.componentName];
                                            console.log('x', Pages[r.componentName]);
                                            setTitle(r.title);
                                            return (
                                                <Layout>
                                                    <Component
                                                        // eslint-disable-next-line react/prop-types
                                                        key={props.match.params.pageId}
                                                        // eslint-disable-next-line react/jsx-props-no-spreading
                                                        {...props}
                                                    />
                                                </Layout>
                                            );
                                        }}
                                    />
                                </>
                            ))}
                        </>
                    ))} */}
                    <CustomRoute render={() => <NotFound />} path="*" />
                </Switch>
            </BrowserRouter>
        </>
    );
}
