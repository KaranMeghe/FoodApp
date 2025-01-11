

const useFinalDisplayPrice = () => {
    const calculateFinalDisplayPrice = ({ price, finalPrice, defaultPrice }) => {
        if (price) return (price / 100).toFixed(2);
        if (finalPrice) return (finalPrice / 100).toFixed(2);
        if (defaultPrice) return (defaultPrice / 100).toFixed(2);
        return "N/A";
    };

    return { calculateFinalDisplayPrice };
};

export default useFinalDisplayPrice;