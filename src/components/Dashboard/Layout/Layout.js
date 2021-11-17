import React from "react";
import Sidebar from "../Parts/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AdminRoutes } from "../../../routes/AppRoutes";
import Home from "../Home/Home";
import Article from "../Article/Article";
import Profile from "../Profile/Profile";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <Router>
        <div className={styles.layout__body}>
          <Sidebar />
          <div className={styles.layout__content}>
            <Switch>
              <Route path={AdminRoutes.HOME}>
                <Home />
              </Route>
              <Route path={AdminRoutes.ARTICLES}>
                <Article />
              </Route>
              <Route path={AdminRoutes.PROFILE}>
                <Profile />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
