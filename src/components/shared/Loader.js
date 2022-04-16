import React from "react";

// css
import styles from "../../styles/modules/loader.module.css";;

const Loader = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.m}>
                <div className={styles.m2}></div>
                <div className={styles.m3}></div>
            </div>
        </div>
    );
};

export default Loader;