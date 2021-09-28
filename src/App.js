import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import ROUTES from "./constants/Routes";
import Ads from "./views/Ads";
import PostAds from "./views/PostAds";
import More from "./views/More";

 const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.ADS} exact component={Ads} />
        <Route path={ROUTES.POST_ADS} exact component={PostAds} />
        <Route path={ROUTES.MORE} exact component={More} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;