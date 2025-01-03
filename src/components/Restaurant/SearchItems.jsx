import { Button } from '../index';

const SearchItems = ({ items }) => {
    return (
        <>
            <div className="flex flex-col relative">
                {items.map((item) => {
                    const { name, price, finalPrice, defaultPrice, ratings,
                        description } = item.card.info || {};

                    const displayPrice = calculateFinalDisplayPrice({ price, finalPrice, defaultPrice });

                    return (
                        <div className="border p-2 flex justify-between gap-6" key={item.card.info.id}>
                            <div className="flex flex-col gap-2">
                                <span>{name || "Unnamed Item"}</span>
                                <span>₹ {displayPrice}</span>
                                <span>{ratings.aggregatedRating.rating && `⭐️ ${ratings.aggregatedRating.rating} (${ratings.aggregatedRating.ratingCountV2})`}</span>
                                <span className="text-gray-500 text-base">{description}</span>
                                <Button className="border bg-green-500 text-white bold w-36" handleClick={handleModal}>Add +</Button>
                            </div>

                            <div className="w-36 h-36">
                                <img
                                    src={`${IMG_CDN_URL}${item.card.info.imageId}`}
                                    alt={name || "Item Image"}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    );
                })}
            </div >
        </>
    );
};

export default SearchItems;