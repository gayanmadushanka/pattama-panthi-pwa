import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import ROUTES from "./constants/Routes";
import HomeView from "./views/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.ROUTE_HOME} exact component={HomeView} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
