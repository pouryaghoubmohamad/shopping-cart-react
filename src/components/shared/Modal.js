import React from "react";

// css
import styles from "../../styles/modules/modal.module.css";

// components
import Button from "../Button";



// react-icons
import { MdOutlineClose } from "react-icons/md";

const Modal = ({modalOpen , setModalOPen , type}) => {
    return (
        <div className={styles.wrapperItem}>
            <div className={styles.wrapperContainer}>
                <div className={styles.closeModal} onClick={() => setModalOPen(false)}>
                    <MdOutlineClose />
                </div>
                {
                    type === "empty" ?
                        <h1>سبد خرید با موفقیت خالی شد!!!!!</h1>
                    :
                        <h1>سبد خرید با موفقیت تکمیل شد!!!</h1>
                }
            </div>
        </div>
    );
};

export default Modal;