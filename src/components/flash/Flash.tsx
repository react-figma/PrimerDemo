import * as React from "react";
import {StyleSheet, View} from "react-native";
import {colors} from "../../tokens/colors";
import {spacingScale} from "../../tokens/spacingScale";
import {FlashText} from "./FlashText";
import {FlashType} from "./FlashType";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        borderRadius: 3,
        backgroundColor: colors.blue100,
        borderWidth: 1,
        borderColor: "rgba(27,31,35,0.15)",
        padding: spacingScale.spacer3
    }
});

const warnStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.yellow100,
    }
});

const errorStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.red100,
    }
});

const successStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.green100,
    }
});

export const Flash = (props: {children: React.ReactNode, type?: FlashType}) => {
    const {children, type} = props;
    return <View style={[
        styles.container,
        type === "warn" && warnStyles.container,
        type === "error" && errorStyles.container,
        type === "success" && successStyles.container
    ]}>
        {children}
    </View>
};

export default (props: {children: string, type?: FlashType}) => {
    const {children, type} = props;
    return <Flash type={type}>
        <FlashText type={type}>
            {children}
        </FlashText>
    </Flash>
}
