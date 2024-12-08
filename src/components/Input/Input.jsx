import React from 'react';

const Input = ({ type, value, placeholder, className, handleChange }) => {
    console.log(value);
    return (
        <input className={className} type={type} value={value} placeholder={placeholder} onChange={handleChange} />
    );
};

export default Input;