import * as React from "react";
import {StyleSheet, View, Text, ViewStyle, TextStyle, ImageStyle, Platform} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";
import Button from "../../wrappers/button/Button";

const styles = StyleSheet.create({
    ...commonButtonStyle,
    text: {
        ...commonButtonStyle.text,
        color: colors.white
    },
    background: {
        ...commonButtonStyle.background,
        ...((Platform.OS !== "ios" && Platform.OS !== "android" ) ? {backgroundImage:  `linear-gradient(-180deg, ${colors.green400} 0%, ${colors.green500} 90%)`} : {}),
        backgroundColor: colors.green500
    }
} as any);

const focusStyles = StyleSheet.create({
    background: {
        shadowColor: "rgba(52,208,88,0.4)",
        shadowRadius: 3.2
    }
});

export interface IPrimaryButton extends IButtonCommon {
    style?: ViewStyle | TextStyle | ImageStyle
}

const PrimaryButton = (props: IPrimaryButton) => {
    const {style, children, isHover, isFocus, isSmall} = props;
    return <View style={[styles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <View style={[styles.background, isFocus && focusStyles.background]} />
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text]}>{children}</Text>
    </View>
};

export default (props: {onClick?: () => void} & IPrimaryButton) => <Button onClick={props.onClick}>
    {({isHover, isFocus}) => <PrimaryButton {...props} isFocus={isFocus} isHover={isHover} />}
</Button>
