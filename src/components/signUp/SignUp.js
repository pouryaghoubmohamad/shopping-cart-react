import React, { useState, useEffect } from "react";

// css
import styles from "./signUp.module.css";

// components
import Button from "../Button";
import Input from "../../common/Input/Input";
import RadioButton from "../../common/RadioButton/RadioButton";
import SelectComponent from "../../common/SelectComponent/SelectComponent";
import SelectReact from "../../common/SelectReact/SelectReact";
import CheckBox from "../../common/CheckBox/CheckBox";

// formik
import { useFormik } from "formik";

// Yup
import * as Yup from "yup";

// react-router-dom
import { withRouter, Link } from "react-router-dom";

// http-services
import signupServices from "../../services/signupServices";

// context-provider
import { useAuthACtion, useAuth } from "../../context/AuthProvider";

// hooks
import { useQuery } from "../../hooks/useQuery";

// radioOptions
const radioOptions = [
    { value: "0", label: "Male" },
    { value: "1", label: "Female" },
];

const selectOptions = [
    { value: "", label: "select options" },
    { value: "IR", label: "Iran" },
    { value: "US", label: "American" },
    { value: "GR", label: "German" },
];

const checkOption = [
    { value: "React.js", label: "React.js" },
    { value: "Vue.js", label: "Vue.js" },
];

// const loadData = {
//     name: "mohammad",
//     email: "pouryaghoubmohmmad@gamil.com",
//     phoneNumber: "09126179760",
//     password: "12345678!qQ",
//     passwordConfirmation: "12345678!qQ",
//     // gender: "0",
//     // nationality: "IR",
//     // interested: ["React.js"],
//     terms: true,
// };

const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
    // gender: "",
    // nationality: "",
    // interested: [],
    // terms: false,
};

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
    name: Yup.string()
        .min(6)
        .max(10)
        .required("Please enter the required field"),

    email: Yup.string()
        .email("Invalid email format")
        .required("email is required"),

    phoneNumber: Yup.string()
        .matches(phoneRegExp, "phone number is not valid")
        .required("phone number is required"),

    password: Yup.string().required("password is required"),

    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("password confirmation is required"),

    // gender: Yup.string().required("Gender is required"),

    // nationality: Yup.string().required("select nationality !"),

    // national: Yup.string().required("select nationality !"),

    // interested: Yup.array().min(1).required("at least select one item"),

    // terms: Yup.boolean()
    //     .required("the terms and condition is required !")
    //     .oneOf([true], "the terms and condition is accept"),
});

const SignUp = ({ history }) => {
    // const [fromValue, setFormValue] = useState(null);

    // context-provider
    const setAuth = useAuthACtion();
    const auth = useAuth();
    const query = useQuery();
    const redirect = query.get("redirect") || "/";

    console.log(redirect);

    const [error, setError] = useState(null);

    useEffect(() => {
        if (auth) history.push(redirect);
    }, [redirect, auth]);

    // onSubmit
    const onSubmit = async (values) => {
        const { name, email, phoneNumber, password } = values;
        const userData = {
            name,
            email,
            phoneNumber,
            password,
        };
        try {
            const { data } = await signupServices(userData);
            setAuth(data);
            // localStorage.setItem("authState", JSON.stringify(data));
            history.push(redirect);
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            }
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true,
    });

    // console.log(formik.errors);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContainer}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <h1 className={styles.titleSignUp}>SignUp</h1>

                    <Input formik={formik} name="name" label="name" />
                    <Input formik={formik} name="email" label="Email" />
                    <Input
                        formik={formik}
                        name="phoneNumber"
                        label="phoneNumber"
                    />
                    <Input
                        formik={formik}
                        type="password"
                        name="password"
                        label="password"
                    />
                    <Input
                        formik={formik}
                        type="password"
                        name="passwordConfirmation"
                        label="passwordConfirm"
                    />

                    {/* <RadioButton
                        options={radioOptions}
                        formik={formik}
                        name="gender"
                    /> */}

                    {/* <SelectComponent
                        selectOptions={selectOptions}
                        formik={formik}
                        name="nationality"
                    /> */}

                    {/* <CheckBox
                        formik={formik}
                        name="interested"
                        checkOption={checkOption}
                    /> */}

                    {/* <div className={`${styles.formControl}`}>
                        <div className={styles.checkboxTerms}>
                            <label htmlFor="terms">terms</label>
                            <input
                                type="checkbox"
                                id="terms"
                                onChange={formik.handleChange}
                                name="terms"
                                value={true}
                                checked={formik.values.terms}
                            />
                        </div>
                        <div>
                            {formik.errors.terms && formik.touched.values && (
                                <div className={styles.errors}>
                                    {formik.errors.terms}
                                </div>
                            )}
                        </div>
                    </div> */}

                    <div className={styles.buttonAction}>
                        <Button
                            variant="Primary"
                            type="submit"
                            disabled={!formik.isValid}
                        >
                            sing up
                        </Button>
                        {/* <Button
                            variant="Primary"
                            type="button"
                            onClick={() => setFormValue(loadData)}
                        >
                            Load data
                        </Button> */}

                        <Link to={`/login?redirect=${redirect}`}>
                            <p style={{ marginTop: "15px" }}>Already login?</p>
                        </Link>
                    </div>
                    {error && (
                        <span style={{ color: "red", fontWeight: "600" }}>
                            errors is :{error}
                        </span>
                    )}
                </form>
            </div>
        </div>
    );
};

export default withRouter(SignUp);
