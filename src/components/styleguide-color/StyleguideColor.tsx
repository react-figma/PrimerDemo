import * as React from "react";
import {StyleSheet, Text, View} from "react-figma";
import {styleguideTypography} from "../styleguide-typography/styleguideTypography";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    rect: {
        width: 99,
        height: 99
    },
    text: {
        marginTop: 10
    }
});

export const StyleguideColor = (props) => {
    const {color, withBorder} = props;
    return <View name="Color container" style={[styles.container, props.style]}>
        <View style={[styles.rect, {backgroundColor: color}, withBorder && {borderColor: "#c8c8c8", borderWidth: 1}]} />
        <Text style={[styleguideTypography.label, styles.text]}>{color}</Text>
    </View>
};
