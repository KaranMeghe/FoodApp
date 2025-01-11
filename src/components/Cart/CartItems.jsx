
import { IMG_CDN_URL } from "../../utils/services/config";
import useCartActions from "../../hooks/useCartActions";
import { Button } from '../index';
import useFinalDisplayPrice from "./useFinalDisplayPrice";


// Reusable component for rendering itemCards
const CartItems = ({ items }) => {
    // Display Final Price
    const { calculateFinalDisplayPrice } = useFinalDisplayPrice();
    const { handleRemoveItem } = useCartActions();

    return (
        <div className="flex flex-col relative w-6/12 overflow-y-auto">
            {!items.length ? <p className="text-center">Your Cart Is Empty !!</p> : items.map((item) => {
                const { name, price, finalPrice, defaultPrice, ratings,
                    description } = item.card.info || {};

                const displayPrice = calculateFinalDisplayPrice({ price, finalPrice, defaultPrice });

                return (
                    <>
                        <div className="border p-2 flex justify-between gap-6" key={item.card.info.id}>
                            <div className="flex flex-col gap-2">
                                <span>{name || "Unnamed Item"}</span>
                                <span>₹ {displayPrice}</span>
                                <span>{ratings.aggregatedRating.rating && `⭐️ ${ratings.aggregatedRating.rating} (${ratings.aggregatedRating.ratingCountV2})`}</span>
                                <span className="text-gray-500 text-base">{description}</span>

                                <Button handleClick={() => handleRemoveItem(item)} className="bg-red-500 text-white border w-8">-</Button>
                            </div>

                            <div className="w-36 h-36">
                                <img
                                    src={`${IMG_CDN_URL}${item.card.info.imageId}`}
                                    alt={name || "Item Image"}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                        </div>
                    </>
                );
            })}
        </div >

    );
};
export default CartItems;