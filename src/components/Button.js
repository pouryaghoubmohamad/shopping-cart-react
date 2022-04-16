import React from "react";

// css
import styles from "../styles/modules/button.module.css";

// utils
import { getClasses } from "../utils/getClasses";

const Button = ({type , variant , children , ...rest}) => {
    return (
        <button
            className={getClasses([
                styles.button,
                styles[`button${variant}`]
            ])}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;