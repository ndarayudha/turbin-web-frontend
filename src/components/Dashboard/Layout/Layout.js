import React, { lazy, Suspense } from "react";
import Sidebar from "../Parts/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AdminRoutes } from "../../../routes/AppRoutes";
import styles from "./Layout.module.css";
import LinearProgress from "@mui/material/LinearProgress";
import Login from "../Login/Login";
import { useLocation, useHistory } from "react-router-dom";

const HomeComponent = lazy(() => import("../Home/Home"));
const ArticleComponent = lazy(() => import("../Article/Article"));
const ProfileComponent = lazy(() => import("../Profile/Profile"));

const Layout = () => {
  const location = useLocation();
  const history = useHistory();
  const isLogin = true;

  return (
    <div>
      <Router>
        <div className={styles.layout__body}>
          <Switch>
            <Route path={AdminRoutes.LOGIN}>
              <Login />
            </Route>
          </Switch>
          <Sidebar />
          <div className={styles.layout__content}>
            <Suspense fallback={<LinearProgress />}>
              <Switch>
                <Route path={AdminRoutes.HOME} exact>
                  <HomeComponent />
                </Route>
                <Route path={AdminRoutes.ARTICLES} exact>
                  <ArticleComponent />
                </Route>
                <Route path={AdminRoutes.PROFILE} exact>
                  <ProfileComponent />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
