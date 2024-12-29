import { IMG_CDN_URL } from "../../utils/services/config";

// Reusable component for rendering itemCards
const RenderItems = ({ items }) => {
  // Display Final Price
  const calculateFinalDisplayPrice = ({ price, finalPrice, defaultPrice }) => {
    if (price) return (price / 100).toFixed(2);
    if (finalPrice) return (finalPrice / 100).toFixed(2);
    if (defaultPrice) return (defaultPrice / 100).toFixed(2);
    return "N/A";
  };

  return (
    <div className="flex flex-col">
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
    </div>
  );
};
export default RenderItems;