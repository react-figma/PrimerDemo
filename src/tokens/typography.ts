import {StyleSheet} from "react-native";

export const typeScale = {
    size00: 48,
    size0: 40,
    size1: 32,
    size2: 24,
    size3: 20,
    size4: 16,
    size5: 14,
    size6: 12
};

export const typography = StyleSheet.create({
    HeadingH1: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size1,
        fontWeight: "600",
    },
    HeadingH2: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size2,
        fontWeight: "600"
    },
    HeadingH3: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size3,
        fontWeight: "600",
    },
    HeadingH4: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size4,
        fontWeight: "600",
    },
    HeadingH5: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size5,
        fontWeight: "600"
    },
    HeadingH6: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size6,
        fontWeight: "600"
    },
    Paragraph1: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size1,
        fontWeight: "normal",
    },
    Paragraph2: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size2,
        fontWeight: "normal"
    },
    Paragraph3: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size3,
        fontWeight: "normal",
    },
    Paragraph4: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size4,
        fontWeight: "normal",
    },
    Paragraph5: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size5,
        fontWeight: "normal"
    },
    Paragraph6: {
        fontFamily: "SF Pro Display",
        fontSize: typeScale.size6,
        fontWeight: "normal"
    }
});
