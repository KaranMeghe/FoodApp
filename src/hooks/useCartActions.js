import { useDispatch } from "react-redux";
import { addItem } from "../Redux/slices/cartSlice";

const useCartActions = (items) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        console.log("handle Add Item", item);
    };

    return { handleAddItem };
};

export default useCartActions;
