import React from 'react';

const Input = (props) => {
    const { type, value, placeholder, className, onChange } = props;
    return (
        <input className={className} type={type} value={value} placeholder={placeholder} onChange={onChange} />
    );
};

export default Input;