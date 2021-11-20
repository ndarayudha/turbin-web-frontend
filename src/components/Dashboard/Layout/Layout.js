import React, {lazy, Suspense} from "react";
import Sidebar from "../Parts/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AdminRoutes } from "../../../routes/AppRoutes";
import Profile from "../Profile/Profile";
import styles from "./Layout.module.css";
import LinearProgress from '@mui/material/LinearProgress';

const HomeComponent = lazy(() => import('../Home/Home'));
const ArticleComponent = lazy(() => import('../Article/Article'))

const Layout = () => {
  return (
    <div>
      <Router>
        <div className={styles.layout__body}>
          <Sidebar />
          <div className={styles.layout__content}>
            <Suspense fallback={<LinearProgress/>}>
            <Switch>
              <Route path={AdminRoutes.HOME}>
                <HomeComponent />
              </Route>
              <Route path={AdminRoutes.ARTICLES}>
                <ArticleComponent />
              </Route>
              <Route path={AdminRoutes.PROFILE}>
                <Profile />
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
