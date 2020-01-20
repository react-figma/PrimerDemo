import * as React from "react";
import {Image} from "react-native";

export const Icon = (props) => {
    const {src: source, height = 16, width, ratio = 1, ...otherProps} = props;
    return <Image source={source} style={{height, width: width || ratio * height}} {...otherProps} />
};
