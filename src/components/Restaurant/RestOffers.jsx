// import { useState } from 'react';

// const RestOffer = ({ resData }) => {
//     const discountInfo = resData?.card?.card?.gridElements?.infoWithStyle?.offers;
//     console.log(discountInfo);

//     return <div id="discount" className='flex gap-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 w-full whitespace-nowrap px-4'>
//         {discountInfo.map((discount) => {
//             return <div key={discount.info.offerIds} className="inline-block border rounded-lg px-4 py-2 min-w-[250px] text-center bg-gray-100">
//                 <span className="p-2 block font-bold text-sm mb-1">{discount.info.offerTag}</span>
//                 <span className=' text-gray-600'>{discount.info.header}</span>
//             </div>;

//         })}
//     </div>;
// };

// export default RestOffer;

const RestOffer = ({ resData }) => {
    const discountInfo = resData?.card?.card?.gridElements?.infoWithStyle?.offers || [];

    return (
        <section
            id="discount"
            className="w-9/12 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 border rounded-md px-6 py-2"
        >
            <div className="flex gap-4 ">
                {discountInfo.map((discount) => (
                    <div
                        key={discount.info.offerIds}
                        className="flex gap-4 align-baseline justify-center items-center border rounded-lg p-2 min-w-[300px] bg-gray-100"
                    >
                        <span className="block font-bold text-sm mb-1">{discount.info.offerTag}</span>
                        <span className="text-gray-600">{discount.info.header}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RestOffer;
