import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const HomePage = lazy(() => import('../Home/HomePage'));
const FeaturePage = lazy(() => import('../Feature/FeaturePage'));

export const Shell: FC = () => {
    return (
        <BrowserRouter>
            <h1>Shell</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/feature">Feature</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/feature" component={FeaturePage} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Shell;