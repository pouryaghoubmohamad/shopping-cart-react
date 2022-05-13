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
import { BiMenuAltLeft } from "react-icons/bi";
import { MdOutlineShoppingCart, MdLogin } from "react-icons/md";

// context-provider
import { useAuth } from "../context/AuthProvider";

const Navbar = ({ sideBarOpen, setSideBarOpen, type }) => {
    // redux
    const cart = useSelector((state) => state.cartState);

    // context-provider
    const userData = useAuth();

    return (
        <header className={styles.header}>
            <nav className={getClasses([styles.nav, styles.container])}>
                <div className={styles.left}>
                    <div
                        className={styles.iconNavbar}
                        onClick={() => setSideBarOpen(!sideBarOpen)}
                    >
                        {type === "add" && <BiMenuAltLeft />}
                    </div>
                    <Link to="/products">products</Link>
                </div>
                <div className={styles.right}>
                    <div className={styles.flexR}>
                        <Link to="/cart">
                            <div className={styles.iconNavbar}>
                                <MdOutlineShoppingCart />
                                <span>{cart.itemsCounter}</span>
                            </div>
                        </Link>
                        <Link to={userData ? userData.name : "/signup"}>
                            <div className={styles.iconLogin}>
                                {userData ? (
                                    <span>{userData.name}</span>
                                ) : (
                                    <div>
                                        <MdLogin />
                                        <span className={styles.titleIcon}>
                                            Signup
                                        </span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
