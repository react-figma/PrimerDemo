import * as React from "react";
import {StyleSheet, Text} from "react-figma";

export const styles = StyleSheet.create({
    text: {
        fontFamily: "SF Pro Display",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 1.08,
        letterSpacing: -0.11
    }
});

export const StyleguideLabel = (props) => {
    const {text} = props;
    return <Text style={styles.text}>{text}</Text>
};
