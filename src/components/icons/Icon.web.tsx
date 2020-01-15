import * as React from "react";
import {Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16
    }
});

export const Icon = (props) => {
    const {src: source, style, ...otherProps} = props;
    return <Image source={source} style={[styles.icon, StyleSheet.flatten(style)]} {...otherProps} />
};
