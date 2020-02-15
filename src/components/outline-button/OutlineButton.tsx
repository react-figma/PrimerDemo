import * as React from "react";
import {StyleSheet, View, Text, ViewStyle, TextStyle, ImageStyle} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";
import Button from "../../wrappers/button/Button";

const styles = StyleSheet.create({
    container: {
        ...commonButtonStyle.container,
        backgroundColor: colors.white
    },
    text: {
        ...commonButtonStyle.text,
        color: "#0366d6",
    }
} as any);

const hoverStyles= StyleSheet.create({
    text: {
        color: "#fff"
    },
    container: {
        backgroundColor: "#0366d6",
        borderColor: "#0366d6"
    }
});

export interface IOutlineButton extends IButtonCommon {
    style?: ViewStyle | TextStyle | ImageStyle
}

export const OutlineButton = (props: {style?: any} & IOutlineButton) => {
    const {style, children, isHover, isSmall} = props;
    return <View style={[styles.container, isHover && hoverStyles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text, isHover && hoverStyles.text]}>{children}</Text>
    </View>
};

export default (props: {onClick?: () => void} & IOutlineButton) => <Button onClick={props.onClick}>
    {({isHover, isFocus}) => <OutlineButton {...props} isFocus={isFocus} isHover={isHover} />}
</Button>
