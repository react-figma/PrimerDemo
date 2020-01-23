import * as React from 'react';
import Flash from "./Flash";
import {storiesOf} from "@storybook/react-native";
import {withKnobs, text, select} from "@storybook/addon-knobs";
import {defaultBackground} from "../storybook-decorators/DefaultBackground";
import {FlashType} from "./FlashType";


storiesOf('Flash', module)
    .addDecorator(withKnobs)
    .addDecorator(defaultBackground)
    .add('Flash', () => <Flash
        type={select<FlashType>("type", {
            "Default": "default",
            "Success": "success",
            "Error": "error",
            "Warning": "warn"
        }, "default")}>
        {text("children", "Flash message goes here.")}
    </Flash>);
