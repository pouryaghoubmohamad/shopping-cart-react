import React, { useState, useEffect } from "react";

// css
import styles from "../signUp/signUp.module.css";
// components
import Button from "../Button";
import Input from "../../common/Input/Input";

// formik
import { useFormik } from "formik";

// Yup
import * as Yup from "yup";

// react-router-dom
import { Link, withRouter } from "react-router-dom";

// http-services
import loginServices from "../../services/loginServices";

// context-provider
import { useAuthACtion, useAuth } from "../../context/AuthProvider";

// hooks
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
    password: "",
    email: "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .required("email is required"),

    password: Yup.string().required("password is required"),
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
});

const Login = ({ history }) => {
    const [error, setError] = useState(null);

    // context-provider
    const setAuth = useAuthACtion();
    const auth = useAuth();

    const query = useQuery();
    const redirect = query.get("redirect") || "/";

    console.log(redirect);

    useEffect(() => {
        if (auth) history.push(redirect);
    }, [redirect, auth]);

    const onSubmit = async (values) => {
        try {
            const { data } = await loginServices(values);
            setError(null);
            setAuth(data);
            // localStorage.setItem("authState", JSON.stringify(data));
            history.push(redirect);
            // console.log(data);
        } catch (error) {
            // console.log(error);
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
                    <h1 className={styles.titleSignUp}>Login</h1>

                    <Input formik={formik} name="email" label="Email" />

                    <Input
                        formik={formik}
                        type="password"
                        name="password"
                        label="password"
                    />

                    <div className={styles.buttonAction}>
                        <Button
                            variant="Primary"
                            type="submit"
                            disabled={!formik.isValid}
                        >
                            Login
                        </Button>

                        <Link to={`/signup?redirect=${redirect}`}>
                            <p style={{ marginTop: "15px" }}>
                                Not signup yet ?
                            </p>
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

export default withRouter(Login);
