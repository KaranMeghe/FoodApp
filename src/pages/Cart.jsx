import React from 'react';
import { useSelector } from 'react-redux';
import { CartTotal, RenderItems } from '../components';
import { CartItems } from '../components/index';

const Cart = () => {
    const cartData = useSelector((store) => store.cart.items);
    console.log("cartData", cartData);
    return (
        <section className='flex gap-5 my-5 max-h-screen overflow-y-auto'>
            <CartItems items={cartData} />
            <CartTotal items={cartData} />
        </section>
    );
};

export default Cart;