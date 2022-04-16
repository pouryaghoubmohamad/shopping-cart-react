import React, { useEffect, useState } from "react";

// css
import styles from "../styles/modules/sideBar.module.css";


// components
import SideBarItem from "./shared/SideBarItem";


// services
import { getListSideBar } from "../services/apiSideBar";

// utils
import { getClasses } from "../utils/getClasses";


// react-icons
import { MdOutlineLogout } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { VscDashboard } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";





const SideBar = ({sideBarOpen , setSideBarOpen}) => {


    useEffect(() => {
        if(window.innerWidth < 1024){
            setSideBarOpen(true)
        }
    } , []);


    return (
        <div className={getClasses([
            styles.sidebar ,
            sideBarOpen && styles[`sidebar--close`]
        ])}>
            <nav className={getClasses([
                    styles.nav ,
                    sideBarOpen && styles[`nav--close`]
                ])}
            >
                <div className={styles.logo}>
                    <div className={styles.nav__icon}>
                        <VscDashboard className={styles.icon__dashboard} />
                    </div>
                    <div className={styles.nav__icon}>
                        <FaTimes className={styles.icon__close} onClick={() => setSideBarOpen(true)} />
                    </div>
                </div>

                <ul className={styles.nav__list}>

                    {
                        sideBarOpen 
                        ?
                        <BsThreeDots className={styles.nav__icon}/>
                        :
                        <span className={styles.nav__text}>pages</span>

                    }
                    {
                        getListSideBar.map(item =>  <SideBarItem key={item.id} sidebar={item} sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />)
                    }

                </ul>

                <div 
                    className={getClasses([
                        styles.nav__icon ,
                        styles.closeSticky ,
                    ])}
                    onClick={() => setSideBarOpen(!sideBarOpen)}
                >
                    <MdOutlineLogout  />
                </div>
            </nav>
        </div>
    );
};

export default SideBar;