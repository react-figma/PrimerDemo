import {StyleSheet} from "react-native";
import {typeScale} from "../../tokens/typography";

const borderSize = 1;

export const commonButtonStyle = {
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: 32
    },
    text: {
        fontFamily: "SF Pro Text",
        fontWeight: "bold",
        fontSize: typeScale.size5,
        lineHeight: 1.42,
        textAlign: "center",
        zIndex: 1,
        marginLeft: 12 + borderSize,
        marginRight: 12 + borderSize
    },
    background: {
        position: "absolute",
        borderRadius: 3,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderColor: "rgba(27,31,35,0.2)"
    }
};

export const commonButtonSmallStyle = StyleSheet.create({
    container: {
        height: 28
    },
    text: {
        fontSize: typeScale.size6,
        lineHeight: 1.66,
        marginLeft: 10 + borderSize,
        marginRight: 10 + borderSize
    }
});

export interface IButtonCommon {
    children: string;
    isDisabled?: boolean;
    isHover?: boolean;
    isFocus?: boolean;
    isSmall?: boolean
}
