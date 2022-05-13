import React from "react";

// css
import styles from "../../components/signUp/signUp.module.css";

const RadioButton = ({ formik, options, name }) => {
    return (
        <div className={styles.formControl}>
            <div className={styles.formField}>
                {options.map((item) => (
                    <div className={styles.fromRadio} key={item.value}>
                        <label htmlFor={item.value}>{item.label}</label>
                        <input
                            id={item.value}
                            type="radio"
                            name={name}
                            value={item.value}
                            onChange={formik.handleChange}
                            checked={formik.values[name] === item.value}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioButton;
