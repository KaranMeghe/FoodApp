import { useState } from 'react';
import { IMG_CDN_URL } from "../../utils/services/config";
import { Button, Modal } from '../index';
// Reusable component for rendering itemCards
const RenderItems = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variations = items.filter((item) => item?.card?.info?.variantsV2?.variantGroups);

  console.log("ver", variations);

  const variants = variations.map((variation) => variation?.card?.info?.variantsV2?.variantGroups.map((va) => va.variations));
  console.log('var', variants);

  const modalData = variants.map((item) => item);
  console.log("md", modalData);


  console.log("Items:", items);

  const handleModal = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  // Display Final Price
  const calculateFinalDisplayPrice = ({ price, finalPrice, defaultPrice }) => {
    if (price) return (price / 100).toFixed(2);
    if (finalPrice) return (finalPrice / 100).toFixed(2);
    if (defaultPrice) return (defaultPrice / 100).toFixed(2);
    return "N/A";
  };

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
        <div className='absolute left-44'>
          {isOpen ? <Modal setIsOpen={setIsOpen} className="p-40 bg-gray-200 rounded-lg">

          </Modal> : null}
        </div>
      </div >
    </>
  );
};
export default RenderItems;