import * as React from "react";
import {StyleSheet, View, Text} from "react-figma";
import {styleguideTypography} from "../styleguide-typography/styleguideTypography";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    main: {
        fontFamily: 'SF Pro Display',
        fontSize: 150,
        letterSpacing: -0.71
    },
    hint: {
        position: "absolute",
        top: "100%",
        marginTop: -16,
        width: "100%",
        textAlign: "center"
    }
});

export const StyleguideFont = (props) => {
    const {label, fontWeight, style} = props;
    return <View style={[styles.container, style]}>
        <Text style={[styles.main, {fontWeight}]}>Aa</Text>
        <Text style={[styleguideTypography.label, styles.hint]}>{label}</Text>
    </View>
};
