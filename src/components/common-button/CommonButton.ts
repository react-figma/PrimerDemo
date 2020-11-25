import {StyleSheet} from "react-native";
import {typeScale} from "../../tokens/typography";

const borderSize = 1;

export const commonButtonStyle = {
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 32,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "rgba(27,31,35,0.2)",
        paddingLeft: 12 + borderSize,
        paddingRight: 12 + borderSize
    },
    text: {
        fontFamily: "SF Pro Text",
        fontWeight: "bold",
        fontSize: typeScale.size5,
        textAlign: "center",
        zIndex: 1,
    }
};

export const commonButtonSmallStyle = StyleSheet.create({
    container: {
        height: 28
    },
    text: {
        fontSize: typeScale.size6,
        lineHeight: 20,
        marginLeft: 10 + borderSize,
        marginRight: 10 + borderSize
    }
});

export interface IButtonCommon {
    children: string;
    isDisabled?: boolean;
    isHover?: boolean;
    isFocus?: boolean;
    isSmall?: boolean;
}
