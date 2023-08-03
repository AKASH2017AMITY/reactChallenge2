import React from 'react';
// import logo from "";
import styles from "./Header.module.css";

function Header() {

    return (
        <nav className={`${styles.navigation}`}> 
        {/* COMMENT :- {`${styles.navigation} container `} 2 className navigation + container global css */}
            <div className="rightNav">
                <img className="logo" src="/images/logo.png" alt="" />
            </div>
            <div className='rightNav'>
                <ul >
                    <li >Home</li>
                    <li >About</li>
                    <li >contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header