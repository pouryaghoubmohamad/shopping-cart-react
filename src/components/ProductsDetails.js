import React from "react";

// css
import styles from "../styles/modules/ProductsDetails.module.css";

// components
import Navbar from "./Navbar";
import Button from "./Button";

// Route
import { Link , useParams } from "react-router-dom";

// react-redux
import { useSelector } from "react-redux";

const ProductsDetails = () => {

    // react-redux
    const products = useSelector(state => state.productsState.products);

    // useParams
    const params = useParams();
    const id = params.id;


    // give one Product
    const product = products[id - 1];
    const { image , title , description , category , price } = product ;

    return (
        <div>
            <Navbar type="update" />
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.description}>{description}</div>
                        <div className={styles.category}>category : <span>{category}</span></div>
                        <div className={styles.buttonDetails}>
                            <Button type="button" variant="Green">
                                {price} $
                            </Button>
                            <Link to="/products">
                                <Button type="button" variant="Primary">
                                    back to shop
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsDetails;