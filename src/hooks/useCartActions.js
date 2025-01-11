import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../Redux/slices/cartSlice";

const useCartActions = (items) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        console.log("handle Add Item", item);
    };

    const handleClearItem = () => {
        dispatch(clearCart());
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item.card.info.id));
        console.log("Removed:", item);
    };

    return { handleAddItem, handleClearItem, handleRemoveItem };
};

export default useCartActions;
