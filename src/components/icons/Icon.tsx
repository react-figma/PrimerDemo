import * as React from "react";
import { SvgXml } from 'react-native-svg';

export const Icon = (props) => {
    const {src: source, height = 16, width, ratio = 1, ...otherProps} = props;

    return <SvgXml xml={source} height={height} width={width || Math.round(height * ratio)} {...otherProps} />;
};
