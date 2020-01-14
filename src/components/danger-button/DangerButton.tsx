import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";

const styles = StyleSheet.create({
    ...commonButtonStyle,
    text: {
        ...commonButtonStyle.text,
        color: colors.red600,
    },
    background: {
        ...commonButtonStyle.background,
        backgroundImage: `linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%)`,
    }
} as any);

const hoverStyles= StyleSheet.create({
    text: {
        color: "#fff"
    },
    background: {
        backgroundColor: "#cb2431",
        backgroundImage: "linear-gradient(-180deg, #de4450 0%, #cb2431 90%)",
        borderColor: "rgba(27,31,35,0.5)"
    }
});

export interface IDangerButtonCommon extends IButtonCommon {}

export const DangerButton = (props: {style?: any} & IDangerButtonCommon) => {
    const {style, children, isHover, isSmall} = props;
    return <View style={[styles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <View style={[styles.background, isHover && hoverStyles && hoverStyles.background]} />
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text, isHover && hoverStyles.text]}>{children}</Text>
    </View>
};
