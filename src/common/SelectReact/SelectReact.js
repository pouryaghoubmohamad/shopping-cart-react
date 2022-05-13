import React, { useState } from "react";

// css
import styles from "../../components/signUp/signUp.module.css";

// react-select
import Select from "react-select";

const SelectReact = ({ selectedReactOption, name, formik, value }) => {
    const [selectedYear, setSelectedYear] = useState("");
    return (
        <div className={styles.formControl}>
            <Select
                value={selectedYear}
                onChange={formik.handleChange}
                options={selectedReactOption}
                // defaultValue={selectedOption}
                // onChange={setSelectedOption}
                // options={options}
            />

            {/* <Select
                name="year_value"
                id="year_value"
                placeholder="Choose year value"
                value={formik.values.year_value}
                onBlur={handleBlur}
                onChange={(selectedOption) => {
                    let event = {
                        target: { name: "year_value", value: selectedOption },
                    };
                    handleChange(event);
                }}
              
                options={yearOptions}
            /> */}
        </div>
    );
};

export default SelectReact;
