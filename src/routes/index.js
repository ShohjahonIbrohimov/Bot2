import React, { useEffect } from "react";
import { watchRequests } from "../utils/loader";
// ROUTE
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import ProtectedRoute from "./protected.route";
import { message } from "antd";
import axios from "axios";
import baseurl from "../utils/baseurl";
const success = () => {
  message.success("SUCCESS");
};

const error = () => {
  message.error("ERROR");
};

const App = () => {
  useEffect(() => {
    watchRequests({ success, error });
  }, [axios]);

  // const baseurl = "https://api.borzhunter.com/api";
  // AXIOS DEFAULTS
  axios.defaults.baseURL = baseurl;
  return (
    <Switch>
      {ROUTES.map((route) => {
        if (route.key === "APP_DASHBOARD") {
          return <ProtectedRoute {...route} component={route.component} />;
        } else {
          return <Route {...route} key={route.key} />;
        }
      })}
    </Switch>
  );
};

export default App;
