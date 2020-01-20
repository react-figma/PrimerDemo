import * as React from "react";
import {Svg} from "react-figma";

export const Icon = (props) => {
    const {src: source, height = 16, width, ratio = 1, ...otherProps} = props;
    return <Svg source={source} height={height} width={width || Math.round(height * ratio)} {...otherProps} />
};
