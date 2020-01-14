import * as React from "react";
import {StyleSheet, View} from "react-native";
import {colors} from "../../tokens/colors";
import {spacingScale} from "../../tokens/spacingScale";
import {FlashText} from "./FlashText";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 3,
        backgroundColor: colors.blue100,
        borderWidth: 1,
        borderColor: "rgba(27,31,35,0.15)"
    },
    content: {
        margin: spacingScale.spacer3
    }
});

const warnStyles = StyleSheet.create({
    background: {
        backgroundColor: colors.yellow100,
    }
});

const errorStyles = StyleSheet.create({
    background: {
        backgroundColor: colors.red100,
    }
});

const successStyles = StyleSheet.create({
    background: {
        backgroundColor: colors.green100,
    }
});

export const Flash = (props: {children: React.ReactNode, isWarn?: boolean, isError?: boolean, isSuccess?: boolean}) => {
    const {children, isWarn, isError, isSuccess} = props;
    return <View style={styles.container}>
        <View style={[
            styles.background,
            isWarn && warnStyles.background,
            isError && errorStyles.background,
            isSuccess && successStyles.background
        ]} />
        <View style={styles.content}>
            {children}
        </View>
    </View>
};

export default (props: {children: React.ReactNode, isWarn?: boolean, isError?: boolean, isSuccess?: boolean}) => {
    const {children, isWarn, isError, isSuccess} = props;
    return <Flash isError={isError} isWarn={isWarn} isSuccess={isSuccess}>
        <FlashText isError={isError} isWarn={isWarn} isSuccess={isSuccess}>
            {children}
        </FlashText>
    </Flash>
}
