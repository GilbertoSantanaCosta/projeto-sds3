import Dashboard from "pages/Dashboard";
import React from "react";
import { Switch } from "react-router-dom";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

const Routes = () => {
    return (
      
       <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                    <Home />
                </Route>
            </Switch>
       </BrowserRouter>
    );
  }
  
  export default Routes;