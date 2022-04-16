import React ,{ useState } from "react";

// css
import styles from "../styles/modules/home.module.css";

// components
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Products from "./Products";



const Home = () => {

    const [sideBarOpen , setSideBarOpen] = useState(true);

    return (
        <div className={styles.home__wrapper}>
            <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
            <div className={styles.homeContainer}>
                <Navbar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} type="add" />
                <div className="container">
                    <Products />
                </div>   
            </div>
        </div>
    );
};

export default Home;