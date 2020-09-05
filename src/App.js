import React from "react";
import { Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";

import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="text-blue-200">
      <Navigation />
      <Switch>
        <Route path="/liked">
          <Liked />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default App;
