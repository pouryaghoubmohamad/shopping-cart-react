import React from "react";

// css
import styles from "../../styles/modules/sideBar.module.css";

// Route
import { NavLink } from "react-router-dom";

const SideBarItem = ({sidebar , sideBarOpen , setSideBarOpen}) => {
    // sidebar
    const { url , icon , title } = sidebar ;


    // checkWindowSize
    const checkWindowSize = () => {
        if(window.innerWidth < 1024  ){
            setSideBarOpen(true);
        }
    }

    return (
        <li className={styles.nav__item} onClick={() => checkWindowSize()}>
            <NavLink 
                to={url}
                className={({isActive}) => isActive && styles.active}
            >
                <div className={styles.nav__icon}>
                    {icon}
                </div>
                <span className={styles.nav__title}>{title}</span>
            </NavLink>
        </li>
    );
};

export default SideBarItem;