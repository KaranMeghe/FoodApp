import React from 'react';
import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = ({ col, row, gap }) => {
    return (
        <ShimmerPostList postStyle="STYLE_FOUR" col={col} row={row} gap={gap} />
    );
};

export default Shimmer;