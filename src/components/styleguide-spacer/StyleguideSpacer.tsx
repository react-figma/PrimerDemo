import * as React from "react";
import {Component, StyleSheet, Text, View} from "react-figma";
import {styleguideTypography} from "../styleguide-typography/styleguideTypography";
import {colors} from "../../tokens/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    rect: {
        backgroundColor: colors.gray300
    },
    text: {
        marginTop: 10
    }
});

export const StyleguideSpacer = (props) => {
    const {size, name} = props;
    return <View name="Spacer container" style={[styles.container, props.style]}>
        {size > 0 && <Component name={name}>
            <View style={[styles.rect, {width: size, height: size}]} />
        </Component>}
        <Text style={[styleguideTypography.label, styles.text]}>{name}</Text>
    </View>
};
