import CssBaseline from '@material-ui/core/CssBaseline';
// import { setTitle } from '@pomocontrol-utils';
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { NotFound, Logout, Login, Home, Register, About, Technical, Profile } from '@pomocontrol-pages';
import { PublicCustomRoute } from './PublicCustomRoute';
import { PrivateCustomRoute } from './PrivateCustomRoute';

import '../styles/styles.scss';

export function App() {
    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <PublicCustomRoute exact render={() => <Logout />} path="/logout" />
                    <PublicCustomRoute exact render={() => <Login />} path="/login" />
                    <PublicCustomRoute exact render={() => <Login />} path="/signin" />
                    <PublicCustomRoute exact render={() => <Technical />} path="/Pomodoro" />
                    <PublicCustomRoute exact render={() => <About />} path="/About" />
                    <PrivateCustomRoute exact render={() => <Home />} path="/home" />
                    <PrivateCustomRoute exact render={() => <Home />} path="/" />
                    <PrivateCustomRoute exact render={() => <Home />} path="/dashboard" />
                    <PrivateCustomRoute exact render={() => <Profile />} path="/profile" />
                    <PublicCustomRoute exact render={() => <Register />} path="/register" />

                    {/* {Routes.map((r) => (
                        <>
                            {r?.paths?.map((path) => (
                                <>
                                    <PublicCustomRoute
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
                    <PublicCustomRoute render={() => <NotFound />} path="*" />
                </Switch>
            </BrowserRouter>
        </>
    );
}
