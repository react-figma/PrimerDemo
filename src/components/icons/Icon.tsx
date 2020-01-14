import * as React from "react";
import {Platform, Image, StyleSheet} from "react-native";
import {Svg} from "react-figma"

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16
    }
});

export const Icon = (props) => {
    const {source, style, ...otherProps} = props;
    // @ts-ignore
    if (Platform.OS === "figma") {
        return <Svg source={source} style={[styles.icon, StyleSheet.flatten(style)]} {...otherProps} />
    }
    return <Image source={source} style={[styles.icon, StyleSheet.flatten(style)]} {...otherProps} />
};
