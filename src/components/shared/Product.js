import React  from "react";

// css
import styles from "../../styles/modules/product.module.css";

// components
import Button from "../Button";

// Route
import { Link } from "react-router-dom";


// utils
import { shorten , isInCart, getClasses , quantityCounter } from "../../utils/getClasses";

// action
import { addCart , removerCart , increaseCart , decreaseCart  } from "../../redux/cart/carAction";

// react-redux
import { useDispatch , useSelector } from "react-redux";

// react-hot-toast
import toast from "react-hot-toast";



// react-icon
import {  MdOutlineShoppingCart , MdMinimize } from "react-icons/md";
import {  AiOutlinePlus  } from "react-icons/ai";
import {  BiTrash } from "react-icons/bi";





// react-loading-skeleton
// import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'




const Product = ({product}) => {

    // loopProduct
    const { image , title , price , id } = product;

    // Redux
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartState);

    const addCartItem = () => {
        dispatch(addCart(product)) 
        toast.success("Product saved successfully")
    }


    const increaseCartItem = () =>{
        dispatch(increaseCart(product))
        toast.success("Product updated successfully")
    }

    const decreaseCartItem = () =>{
        dispatch(decreaseCart(product))
        toast.success("Product updated successfully")
    }

    const removeCartItem = () =>{
        dispatch(removerCart(product))
        toast.error("Product successfully Remove")
    }

   


    return (

        <div className={styles.wrapper}>
            <div className={styles.responseImg}>
                <img src={image} alt="" className={styles.productImg} />
            </div>
            <p className={styles.title}>{shorten(title)}</p>
            <p className={styles.price}>{`${price} $`}</p>

            <div className={styles.buttonProduct}>
                <div className={styles.buttonAction}>
                    {
                        isInCart(cart , id) 
                        ?
                        <div
                            onClick={() => increaseCartItem()}
                            className={getClasses([
                                styles.icon ,
                                styles.iconIncrease
                            ])}>
                            <AiOutlinePlus />
                        </div>
                        :
                        <Button type="button" variant="Primary" onClick={() => addCartItem()}>
                        add to cart
                        <div className={styles.icon}>
                            <MdOutlineShoppingCart />
                        </div>
                        </Button>
                    }

                    {
                        quantityCounter(cart , id)  &&
                       <span>{quantityCounter(cart,id)}</span>
                    }

                    {
                        quantityCounter(cart , id) === 1
                        &&
                        <div
                            onClick={() => removeCartItem()}
                            className={getClasses([
                                styles.icon ,
                                styles.iconIncrease
                            ])}>
                            <BiTrash />

                        </div>
                    }

                    {
                        quantityCounter(cart , id) > 1
                        &&
                        <div
                            onClick={() => decreaseCartItem()}
                            className={getClasses([
                                styles.icon ,
                                styles.iconIncrease
                            ])}>
                            <MdMinimize />
                        </div>
                    }


                </div>
                <div className={styles.buttonDetails}>
                    <Link to={`/products/${id}`}>
                        <span>Details</span>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Product;