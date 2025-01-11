import { useState, useEffect } from "react";
import useCartActions from "../../hooks/useCartActions";
import { Button } from '../index';
import useFinalDisplayPrice from "./useFinalDisplayPrice";

const CartTotal = ({ items }) => {
    const [total, setTotal] = useState(0);
    const { calculateFinalDisplayPrice } = useFinalDisplayPrice();
    const { handleClearItem } = useCartActions();

    useEffect(() => {
        const totalPriceArr = items.map((item) => {
            const { price, finalPrice, defaultPrice } = item.card.info || {};
            return calculateFinalDisplayPrice({ price, finalPrice, defaultPrice });
        });

        const totalPrice = totalPriceArr.reduce((acc, curr) => Number(acc) + Number(curr), 0);
        setTotal(totalPrice.toFixed(2));
    }, [items, calculateFinalDisplayPrice]);

    return total > 0 ? <div className="flex gap-5 justify-between border border-t-0 border-l-0 border-r-0 rounded p-2 w-6/12 h-full my-14">
        <div className="w-6/12">
            <span className="font-extrabold">To Pay -</span>
            <span className="text-xl"> ₹ {total}</span>
        </div>
        <Button handleClick={handleClearItem} className="border p-2 w-3/12 h-12 bg-orange-400 text-white ">Clear Cart</Button>
    </div> : null;

};


export default CartTotal;