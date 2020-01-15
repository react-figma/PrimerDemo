import * as React from "react";
import {StyleSheet, View, Text, ViewStyle, TextStyle, ImageStyle} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";
import ToButton from "../../wrappers/button/ToButton";

const styles = StyleSheet.create({
    ...commonButtonStyle,
    text: {
        ...commonButtonStyle.text,
        color: "#0366d6",
    },
    background: {
        ...commonButtonStyle.background,
        backgroundColor: colors.white
    }
} as any);

const hoverStyles= StyleSheet.create({
    text: {
        color: "#fff"
    },
    background: {
        backgroundColor: "#0366d6",
        borderColor: "#0366d6"
    }
});

export interface IOutlineButton extends IButtonCommon {
    style?: ViewStyle | TextStyle | ImageStyle
}

export const OutlineButton = (props: {style?: any} & IOutlineButton) => {
    const {style, children, isHover, isSmall} = props;
    return <View style={[styles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <View style={[styles.background, isHover && hoverStyles.background]} />
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text, isHover && hoverStyles.text]}>{children}</Text>
    </View>
};

export default (props: {onClick?: () => void} & IOutlineButton) => <ToButton onClick={props.onClick}>
    {({isHover, isFocus}) => <OutlineButton {...props} isFocus={isFocus} isHover={isHover} />}
</ToButton>
