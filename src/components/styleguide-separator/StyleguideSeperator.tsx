import * as React from "react";
import {StyleSheet, View} from "react-figma";

export const styles = StyleSheet.create({
    line: {
        width: 1044,
        height: 1,
        backgroundColor: "#e4e4e4"
    }
});

export const StyleguideSeparator = (props) => {
    return <View style={[styles.line, props.style]} />
};
