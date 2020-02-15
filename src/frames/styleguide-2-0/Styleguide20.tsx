import * as React from "react";
import {StyleSheet, Frame, View, Text, Component} from "react-figma";
import {StyleguideLabel} from "../../components/styleguide-label/StyleguideLabel";
import {StyleguideSeparatorWrapper} from "../../components/styleguide-separator/StyleguideSeparatorWrapper";
import PrimaryButton from "../../components/primary-button/PrimaryButton";
import DefaultButton from "../../components/default-button/DefaultButton";
import DangerButton from "../../components/danger-button/DangerButton";
import OutlineButton from "../../components/outline-button/OutlineButton";
import Flash, {Flash as FlashContainer} from "../../components/flash/Flash";
import {FlashText} from "../../components/flash/FlashText";

const styles = StyleSheet.create({
    frame: {
        paddingTop: 85,
        paddingLeft: 195,
        paddingRight: 195,
        paddingBottom: 85
    },
    buttonsLine: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center"
    },
    buttonMargin: {
        marginLeft: 20
    },
    alertLine: {
        marginTop: 40,
        width: 1144
    },
    alertText: {
        fontFamily: "SF Pro Display",
        fontSize: 14,
    },
    flashComponent: {
        width: "100%"
    }
});

export const Styleguide20 = (props) => {
    return <Frame name="Styleguide 2-0" style={[styles.frame, props.style]}>
        <View style={{marginTop: 69}}>
            <StyleguideSeparatorWrapper>
                <StyleguideLabel text="Buttons" />
            </StyleguideSeparatorWrapper>
            <View style={styles.buttonsLine}>
                <Component name="button-default">
                    <DefaultButton>Button</DefaultButton>
                </Component>
                <Component name="button-default-hover" style={styles.buttonMargin}>
                    <DefaultButton isHover >Hovered button</DefaultButton>
                </Component>
                <Component name="button-default-focus" style={styles.buttonMargin}>
                    <DefaultButton isFocus >Focused button</DefaultButton>
                </Component>
                <Component name="button-default-small" style={styles.buttonMargin}>
                    <DefaultButton isSmall >Small button</DefaultButton>
                </Component>
            </View>
            <View style={styles.buttonsLine}>
                <Component name="button-primary">
                    <PrimaryButton>Primary button</PrimaryButton>
                </Component>
                <Component name="button-primary-focus" style={styles.buttonMargin}>
                    <PrimaryButton isFocus>Primary button focus</PrimaryButton>
                </Component>
                <Component name="button-primary-small" style={styles.buttonMargin}>
                    <PrimaryButton isSmall>Small primary button</PrimaryButton>
                </Component>
            </View>
            <View style={styles.buttonsLine}>
                <Component name="button-danger">
                    <DangerButton>Danger button</DangerButton>
                </Component>
                <Component name="button-danger-hover" style={styles.buttonMargin}>
                    <DangerButton isHover>Danger button hover</DangerButton>
                </Component>
                <Component name="button-danger-small" style={styles.buttonMargin}>
                    <DangerButton isSmall>Small danger button</DangerButton>
                </Component>
            </View>
            <View style={styles.buttonsLine}>
                <Component name="button-outline">
                    <OutlineButton>Outline button</OutlineButton>
                </Component>
                <Component name="button-outline-hover" style={styles.buttonMargin}>
                    <OutlineButton isHover>Outline button hover</OutlineButton>
                </Component>
                <Component name="button-outline-small" style={styles.buttonMargin}>
                    <OutlineButton isSmall>Outline button small</OutlineButton>
                </Component>
            </View>
            <View style={{marginTop: 40}}>
                <StyleguideSeparatorWrapper>
                    <StyleguideLabel text="Alerts" />
                </StyleguideSeparatorWrapper>
            </View>
            <View style={styles.alertLine}>
                <Component name="flash" style={styles.flashComponent}>
                    <Flash>
                        Flash message goes here.
                    </Flash>
                </Component>
            </View>
            <View style={styles.alertLine}>
                <Component name="flash-two-lines" style={styles.flashComponent}>
                    <FlashContainer>
                        <FlashText>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</FlashText>
                        <FlashText style={{marginTop: 10}}>And this is another paragraph.</FlashText>
                    </FlashContainer>
                </Component>
            </View>
            <View style={styles.alertLine}>
                <Component name="flash-warn" style={styles.flashComponent}>
                    <Flash type="warn">
                        Flash message goes here.
                    </Flash>
                </Component>
            </View>
            <View style={styles.alertLine}>
                <Component name="flash-error" style={styles.flashComponent}>
                    <Flash type="error">
                        Flash message goes here.
                    </Flash>
                </Component>
            </View>
            <View style={styles.alertLine}>
                <Component name="flash-success" style={styles.flashComponent}>
                    <Flash type="success">
                        Flash message goes here.
                    </Flash>
                </Component>
            </View>
        </View>
    </Frame>
};
