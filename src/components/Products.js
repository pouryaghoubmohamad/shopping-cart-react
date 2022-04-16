import React, { useEffect } from "react";

// css
import styles from "../styles/modules/products.module.css";

// components
import Loader from "./shared/Loader";
import Product from "./shared/Product";

// react-redux
import { useDispatch , useSelector } from "react-redux";

// action
import { fetchProducts  } from "../redux/products/productsAction";



// react-loading-skeleton
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'


const Products = () => {


    // redux
    const dispatch = useDispatch();
    const products = useSelector(state => state.productsState);


    const item = products.products;

    useEffect(() => {
        if(products.products.length > 0) 
        return 
        dispatch(fetchProducts());

    } , [] );

    return (
        
        <div className={styles.wrapper}>
            {
                products.loading ?
                    <Loader />
                :
                products.errors ?
                <p>بارگذاری با مشکل مواجه شده است....</p>
                :
                products.products.map(item => 
                    (<Product 
                        key={item.id}
                        product={item}
                    />))
            }
        </div>
    );
};

export default Products;