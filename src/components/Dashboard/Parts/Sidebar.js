import React from "react";
import { NavLink } from "react-router-dom";
import { AdminRoutes } from "../../../routes/AppRoutes";
import styles from "./Sidebar.module.css";
import IcFlashWhite from "../../../assets/ic_flash_white.png";
import IcDashboard from "../../../assets/ic_dashboard.png";
import IcArticle from "../../../assets/ic_article.png";
import IcProfile from "../../../assets/ic_profile.png";
import IcLogout from "../../../assets/ic_logout.png";
import Button from '../../UI/Button/Button'

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <img src={IcFlashWhite} alt="Flash Logo" />
        <h2>Turbin Listrik</h2>
      </div>
      <hr />
      <ul className={styles.sidebar__link}>
        <li>
          <NavLink
            to={AdminRoutes.HOME}
            activeClassName={styles.active}
            className={styles.nav__item}
          >
            <img src={IcDashboard} alt="Icon Dashboard" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={AdminRoutes.ARTICLES}
            activeClassName={styles.active}
            className={styles.nav__item}
          >
            <img src={IcArticle} alt="Icon Article" />
            Article
          </NavLink>
        </li>
        <li>
          <NavLink
            to={AdminRoutes.PROFILE}
            activeClassName={styles.active}
            className={styles.nav__item}
          >
            <img src={IcProfile} alt="Icon Profile" />
            Profile
          </NavLink>
        </li>
      </ul>
      <div className={styles.sidebar__profile}>
          <p>Selamat Datang</p>
          <div className={styles.sidebar__profileAvatar}>
              <img src={IcProfile} alt="Icon Profile" />
              <div className={styles.sidebar__profileName}>
                <h4>Yofan Niki</h4>
                <p>Admin</p>
              </div>
          </div>
          <Button primary>
            <img src={IcLogout} alt="Icon Logout" />
            Logout
          </Button>
      </div>
    </nav>
  );
};

export default Sidebar;
