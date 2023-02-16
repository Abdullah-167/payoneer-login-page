import React from 'react'
import styles from '../../common/Input/input.module.css'
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiOutlineGlobal } from "react-icons/ai";

const input = () => {
    return (
        <div>
            <div className={styles.inpmain}>
                <input className={styles.inp} placeholder='Email or username' />
                <span className={styles.inpicon}>
                    <HiOutlineInformationCircle />
                </span>
            </div>
            <div className={styles.secinpmain}>
                <div className={styles.secinpu}>
                    <input className={styles.inp} placeholder='Password' />
                </div>
                <span className={styles.forgetpas}>Forget Password?</span>
            </div>
            <div className={styles.btnmain}>
                <button className={styles.signBtn}>Sign In</button>
            </div>
            <div className={styles.mainsign}>
                <p className={styles.newto}>New To Payoneer? <span className={styles.sign}>Sign Up!</span></p>
            </div>
            <div className={styles.inpfooter}>
                <p className={styles.copywrite}>© 2005-2023 Payoneer Inc.</p>
                <span className={styles.contactmain}>| <span className={styles.contactsec}> Contact Us </span> |</span>
                <span className={styles.globalmain}><AiOutlineGlobal /> <span className={styles.globalsec}> English </span></span>
            </div>
        </div>
    )
}

export default input