import * as React from "react";
import {Svg, StyleSheet} from "react-figma";

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16
    }
});

export const Icon = (props) => {
    const {src: source, style, ...otherProps} = props;
    return <Svg source={source} style={[styles.icon, StyleSheet.flatten(style)]} {...otherProps} />
};
