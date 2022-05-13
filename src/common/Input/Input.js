import React from "react";

// css
import styles from "./../../components/signUp/signUp.module.css";

const Input = ({ formik, type = "text", name , label }) => {
    return (
        <div className={styles.formControl}>
            <label htmlFor="">{label}</label>
            <input type={type} {...formik.getFieldProps(name)} />
            {formik.errors[name] && formik.touched[name] && (
                <div className={styles.errors}>{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default Input;
