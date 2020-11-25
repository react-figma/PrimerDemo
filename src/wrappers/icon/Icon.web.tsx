import * as React from "react";

export const Icon = (props) => {
    const {src, height = 16, width, ratio = 1, ...otherProps} = props;
    return <img src={src} style={{height, width: width || ratio * height}} {...otherProps} />
};
