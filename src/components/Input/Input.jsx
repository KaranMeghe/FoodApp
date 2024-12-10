import React from 'react';

const Input = (props) => {
    const { type, value, placeholder, className, handleChange } = props;
    return (
        <input className={className} type={type} value={value} placeholder={placeholder} onChange={handleChange} />
    );
};

export default Input;