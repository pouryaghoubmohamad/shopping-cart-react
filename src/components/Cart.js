import React , { useState } from "react";

// css
import styles from "../styles/modules/cart.module.css";

// components
import CartItem from "./shared/CartItem";
import Navbar from "./Navbar";
import Button from "./Button";
import Modal from "./shared/Modal";


// react-redux
import { useSelector , useDispatch } from "react-redux";

// action
import { clear , checkout } from "../redux/cart/carAction";


// Route
import { Link } from "react-router-dom";

// assets
import imgEmpty from "./assets/images/empty-state_4x.webp";




// react-icons


const Cart = () => {

    // react-redux
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartState);
    const [modalOpen , setModalOPen] = useState(false);


    const ClearCartItem = () => {
        setModalOPen(true);
        dispatch(clear());
    }

    const checkoutItem = () => {
        setModalOPen(true);
        dispatch(checkout());
    }


    return (
        <>
            <Navbar type="update" />
            {
                cart.products.length > 0 &&
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.payment}>
                            <p className={styles.counter}>counter items : <span style={{color : "green"}}>{cart.itemsCounter}</span></p>
                            <p className={styles.total}>total items : <span style={{color : "green"}}>{cart.total}  $</span></p>
                            <div className={styles.buttonPayment}>
                            <Button type="button" variant="Green" onClick={() => ClearCartItem()}>
                                clear
                            </Button>
                            <Button type="button" variant="Primary" onClick={() => checkoutItem()}>
                                checkout
                            </Button>
                            </div>
                        </div>
                        <div className={styles.cartContainer}>
                            {
                                cart.products.map(item => 
                                    <CartItem 
                                        key={item.id}
                                        cart={item}
                                    />)
                            }
                        </div>

                    </div>
                </div>
            }

            {
                cart.checkout && cart.itemsCounter === 0 &&

                <div>
                    <div className={styles.buttonShop}>
                        <Link to="/products">
                            <Button type="button"  variant="Primary">
                                Buy More
                            </Button>
                        </Link>
                        <h1 className={styles.shoppingTitle}>خرید تکمیل شد</h1>
                    </div>
                    <div className={styles.imageEmpty}>
                        <img src={imgEmpty} alt="" />
                    </div>
                </div>
            }

            {
                !(cart.checkout) && cart.itemsCounter === 0 &&
                <div>
                    <div className={styles.buttonShop}>
                        <Link to="/products">
                            <Button type="button"  variant="Primary">
                                go to shop
                            </Button>
                        </Link>
                        <h1 className={styles.shoppingTitle}>سبد خرید شما  خالی میباشد</h1>
                    </div>
                    <div className={styles.imageEmpty}>
                        <img src={imgEmpty} alt="" />
                    </div>
                </div>
            }

            {
                modalOpen && cart.checkout &&
                <Modal modalOpen={modalOpen} setModalOPen={setModalOPen}  />
            }

            {
                modalOpen && !cart.checkout &&
                <Modal type="empty" modalOpen={modalOpen} setModalOPen={setModalOPen}  />
            }
        </>
    );
};

export default Cart;