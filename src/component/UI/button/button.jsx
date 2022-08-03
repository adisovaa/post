import React from 'react'
import s from './button.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button className={s.btn}>{children}</button>
    );
};


export default MyButton