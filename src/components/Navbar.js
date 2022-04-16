import React from "react";

// css
import styles from "../styles/modules/navbar.module.css";

// Route
import { Link } from "react-router-dom";


// utils
import { getClasses } from "../utils/getClasses";

// react-redux
import { useSelector } from "react-redux";


// react-icons
import { BiMenuAltLeft  } from "react-icons/bi";
import {  MdOutlineShoppingCart } from "react-icons/md";



const Navbar = ({sideBarOpen , setSideBarOpen , type}) => {


    // redux
    const cart = useSelector(state => state.cartState);

    return (
        <header className={styles.header}>
            <nav className={getClasses([
                styles.nav ,
                styles.container
            ])}>
                <div className={styles.left}>
                    <div className={styles.iconNavbar} onClick={() => setSideBarOpen(!sideBarOpen)}>
                        {
                            type === "add" && <BiMenuAltLeft />
                        }
                    </div>
                    <Link to="/products">
                        products
                    </Link>
                </div>
                <div className={styles.right}>
                    <Link to="/cart">
                        <div className={styles.iconNavbar}>
                            <MdOutlineShoppingCart />
                            <span>{cart.itemsCounter}</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;