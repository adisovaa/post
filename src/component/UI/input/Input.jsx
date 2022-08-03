import React from 'react';
import s from './button.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input className={s.myInput} {...props}/>
        </div>
    );
})

export default MyInput