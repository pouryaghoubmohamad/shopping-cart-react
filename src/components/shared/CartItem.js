import React, { useState } from "react";

// css
import styles from "../../styles/modules/cartItem.module.css";




// action
import { decreaseCart, increaseCart, removerCart } from "../../redux/cart/carAction";


// react-redux
import { useDispatch } from "react-redux";

// utils
import { shorten , getClasses } from "../../utils/getClasses";

// react-hot-toast
import toast from "react-hot-toast";


// react-icon
import {  MdOutlineShoppingCart , MdMinimize } from "react-icons/md";
import {  AiOutlinePlus  } from "react-icons/ai";
import {  BiTrash } from "react-icons/bi";

const CartItem = ({cart}) => {



    const { image , price , quantity , title } = cart ;
    // redux
    const dispatch = useDispatch();



    const increaseCartItem = () =>{
        dispatch(increaseCart(cart))
        toast.success("Product updated successfully")
    }

    const decreaseCartItem = () =>{
        dispatch(decreaseCart(cart))
        toast.success("Product updated successfully")
    }

    const removeCartItem = () =>{
        dispatch(removerCart(cart))
        toast.error("Product successfully Remove")
    }


    return (

        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.details}>
                <p>{shorten(title)}</p>
                <span>{price} $</span>
            </div>
            <div className={styles.quantity}>
                {quantity}
            </div>
            <div className={styles.buttonAction}>

                {
                    quantity === 1 
                    ?
                    <div
                        onClick={() => removeCartItem()}
                        className={getClasses([
                            styles.icon ,
                                styles.iconIncrease
                            ])}>
                            <BiTrash />
                    </div>
                    :

                    <div
                        onClick={() => decreaseCartItem()}
                        className={getClasses([
                            styles.icon ,
                                styles.iconIncrease
                            ])}>
                            <MdMinimize />
                    </div>
                }

                <div
                    onClick={() => increaseCartItem()}
                    className={getClasses([
                        styles.icon ,
                            styles.iconIncrease
                        ])}>
                        <AiOutlinePlus />
                </div>
            </div>


        </div>

    );
};

export default CartItem;