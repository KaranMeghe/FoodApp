import { useState } from "react";

const RestInfo = ({ resData }) => {

    return <div className="flex flex-col w-9/12">
        <h3 className="text-2xl">{resData[0].card?.card?.text}</h3>

        <div className="border rounded-md flex flex-col  items-start  p-5 my-5">
            <div>
                <span> ⭐️ {resData[2]?.card?.card?.info?.avgRating
                    ? Number(resData[2].card.card.info.avgRating).toFixed(1)
                    : "N/A"}</span>
                <span className="mx-2">({resData[2]?.card?.card?.info?.totalRatingsString})</span>
                <span>.</span>
                <span className="mx-2">{resData[2]?.card?.card?.info?.costForTwoMessage}</span>

                <p>{resData[2]?.card?.card?.info?.cuisines.join(" , ")}</p>
                <p>⏱ {resData[2]?.card?.card?.info?.sla?.slaString}</p>

            </div>
        </div>
    </div>;
};
export default RestInfo;