import React, { useContext } from "react";
import { Link } from "react-router-dom";

// == IMPORT Components
import LoginForm from "../LoginForm/LoginForm";

import userContext from "../../context/User/UserContext";

// == IMPORT style
import styles from "./Nav.module.css";
import Logo from "../../assets/logo.png";
import { IconContext } from "react-icons";
import { FaUserCircle, FaLemon } from "react-icons/fa";

const Nav = () => {

  const UserContext = useContext(userContext);

  const toggledValue = UserContext.toggleLoginField;
  const isLogged = UserContext.isLogged;

  return (
    <header className={isLogged ? `${styles["wrapper-logged"]}` : `${styles.wrapper}`}>
      <Link className={styles.logo} to="/">
        <img className={styles["logo-img"]} src={Logo} alt="logo of the site" />
      </Link>
      <nav>
        {
          !isLogged && (
            <IconContext.Provider
              value={{ size: "2.5rem", color: "black" }}
            >
              <FaUserCircle
                onClick={() => {
                  UserContext.toggleLogin();
                }}
              />
            </IconContext.Provider>
          )
        }
        {
          toggledValue && !isLogged && (
            <LoginForm />
          )
        }
        {
          isLogged && (
            <div className={styles["nav-logged"]}>
              <LoginForm />
              <div className={styles["recipes-link"]}>
                <Link to="/mes-recettes" className={styles["nav-links"]}>
                  <FaLemon size={28} color={"black"} />
                  <p>Mes recettes</p>
                </Link>
              </div>
            </div>
          )
        }
      </nav>
    </header>
  );
};

export default Nav;
