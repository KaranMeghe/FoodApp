import { IMG_CDN_URL } from "../../utils/services/config";
import { FaRegStar, FaMapMarkerAlt } from "react-icons/fa";

const RestaruntCard = ({ info }) => {
    const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, locality, aggregatedDiscountInfoV3, sla, veg, subHeader } = info;
    return <article className="w-72 flex flex-col rounded-lg overflow-hidden shadow-lg">
        {name && (
            <>
                <div className="h-48 relative">
                    <img
                        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
                        alt={`${name} Image`}
                        className="w-full h-full object-cover"
                    />

                    <p
                        className={`absolute bottom-3 left-2 text-2xl text-white font-extrabold p-1 ${aggregatedDiscountInfoV3?.header ? "bg-green-500" : ""}`}
                    >
                        {aggregatedDiscountInfoV3?.header &&
                            `${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`}
                    </p>





                </div>

                <div className="flex flex-col justify-around p-5">
                    <h3 className="font-semibold text-lg mb-2">{name}</h3>
                    <div className="flex gap-4">
                        <p className="flex justify-center items-center gap-2"><FaRegStar />{avgRating}</p>
                        <p>.</p>
                        <p>{sla.slaString}</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 break-words">{cuisines.join(',')}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2"> <FaMapMarkerAlt />{locality || "Location N/A"}</p>
                </div>
            </>
        )}
    </article>;
};



export default RestaruntCard;