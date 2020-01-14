import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";

const styles = StyleSheet.create({
    ...commonButtonStyle,
    text: {
        ...commonButtonStyle.text,
        color: colors.white,
    },
    background: {
        ...commonButtonStyle.background,
        backgroundImage: `linear-gradient(-180deg, ${colors.green400} 0%, ${colors.green500} 90%)`,
    }
} as any);

const focusStyles = StyleSheet.create({
    background: {
        shadowColor: "rgba(52,208,88,0.4)",
        shadowRadius: 3.2
    }
});

export interface IPrimaryButtonCommon extends IButtonCommon {}

export const PrimaryButton = (props: {isFocus?: boolean, isHover?: boolean,style?: any} & IPrimaryButtonCommon) => {
    const {style, children, isHover, isFocus, isSmall} = props;
    return <View style={[styles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <View style={[styles.background, isFocus && focusStyles.background]} />
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text]}>{children}</Text>
    </View>
};
