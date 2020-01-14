import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";

const styles = StyleSheet.create({
    ...commonButtonStyle,
    text: {
        ...commonButtonStyle.text,
        color: colors.gray900,
    },
    background: {
        ...commonButtonStyle.background,
        backgroundImage: `linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%)`,
    }
} as any);

const hoverStyles = StyleSheet.create({
    background: {
        backgroundColor: '#e6ebf1',
        backgroundImage: "linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%)",
        borderColor: "rgba(27,31,35,0.35)"
    }
});

const focusStyles = StyleSheet.create({
    background: {
        shadowColor: "rgba(3,102,214,0.3)",
        shadowRadius: 4
    }
});

export interface IDefaultButtonCommon extends IButtonCommon {}

export const DefaultButton = (props: {style?: any} & IDefaultButtonCommon) => {
    const {style, children, isHover, isFocus, isSmall} = props;
    return <View style={[styles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <View style={[styles.background, isHover && hoverStyles.background, isFocus && focusStyles.background]} />
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text]}>{children}</Text>
    </View>
};
