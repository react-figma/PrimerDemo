import * as React from "react";
import {StyleSheet, View, Text, ViewStyle, TextStyle, ImageStyle, Platform} from "react-native";
import {colors} from "../../tokens/colors";
import {commonButtonSmallStyle, commonButtonStyle, IButtonCommon} from "../common-button/CommonButton";
import Button from "../../wrappers/button/Button";

const styles = StyleSheet.create({
    container: {
        ...commonButtonStyle.container,
        backgroundColor: "#fafbfc",
        ...((Platform.OS !== "ios" && Platform.OS !== "android" ) ? {backgroundImage: `linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%)`} : {}),
    },
    text: {
        ...commonButtonStyle.text,
        color: colors.red600,
    }
} as any);

const hoverStyles= StyleSheet.create({
    container: {
        backgroundColor: "#cb2431",
        ...((Platform.OS !== "ios" && Platform.OS !== "android" ) ? {backgroundImage: "linear-gradient(-180deg, #de4450 0%, #cb2431 90%)"} : {}),
        borderColor: "rgba(27,31,35,0.5)"
    },
    text: {
        color: "#fff"
    }
});

export interface IDangerButton extends IButtonCommon {
    style?: ViewStyle | TextStyle | ImageStyle
}

export const DangerButton = (props: IDangerButton) => {
    const {style, children, isHover, isSmall} = props;
    return <View style={[styles.container, isHover && hoverStyles && hoverStyles.container, isSmall && commonButtonSmallStyle.container, style]}>
        <Text style={[styles.text, isSmall && commonButtonSmallStyle.text, isHover && hoverStyles.text]}>{children}</Text>
    </View>
};

export default (props: {onClick?: () => void} & IDangerButton) => <Button onClick={props.onClick}>
    {({isHover, isFocus}) => <DangerButton {...props} isFocus={isFocus} isHover={isHover} />}
</Button>
