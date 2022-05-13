import React from "react";

// css
import styles from "../../components/signUp/signUp.module.css";

const SelectComponent = ({ formik, selectOptions , name }) => {
    return (
        <div className={styles.formControl}>
            <select {...formik.getFieldProps(name)}>
                {selectOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            {formik.errors[name] && formik.touched[name] && (
                <div className={styles.errors}>{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default SelectComponent;
