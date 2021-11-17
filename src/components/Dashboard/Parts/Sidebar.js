import React from "react";
import { Link} from "react-router-dom";
import { AdminRoutes } from "../../../routes/AppRoutes";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <Link to={AdminRoutes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={AdminRoutes.ARTICLES}>Article</Link>
        </li>
        <li>
          <Link to={AdminRoutes.PROFILE}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
