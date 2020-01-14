import * as React from "react";
import {StyleSheet, View} from "react-figma";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    labelContainer: {
        width: 205
    },
    typographyContainer: {
        maxWidth: 460
    }
});

export const TypographyContainer = (props) => {
    const {style, label, typography} = props;
    return <View style={[styles.container, style]}>
        <View style={styles.labelContainer}>
            {label}
        </View>
        <View style={styles.typographyContainer}>
            {typography}
        </View>
    </View>
};
