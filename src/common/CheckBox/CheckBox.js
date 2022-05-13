import React from "react";

// css
import styles from "../../components/signUp/signUp.module.css";

const CheckBox = ({ formik, checkOption, name }) => {
    return (
        <div className={styles.formControl}>
            <div className={styles.formField}>
                {checkOption.map((item) => (
                    <div className={styles.fromRadio} key={item.value}>
                        <label htmlFor={item.value}>{item.label}</label>
                        <input
                            type="checkbox"
                            id={item.value}
                            name={name}
                            value={item.value}
                            onChange={formik.handleChange}
                            checked={formik.values[name].includes(item.value)}
                        />
                    </div>
                ))}
            </div>

            {formik.errors[name] && formik.touched[name] && (
                <div className={styles.errors}>{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default CheckBox;
