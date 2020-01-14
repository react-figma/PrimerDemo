import * as React from 'react';
import Flash from "./Flash";
import {storiesOf} from "@storybook/react-native";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import {defaultBackground} from "../storybook-decorators/DefaultBackground";


storiesOf('Flash', module)
    .addDecorator(withKnobs)
    .addDecorator(defaultBackground)
    .add('Flash', () => <Flash
        isWarn={boolean("isWarn", false)}
        isError={boolean("isError", false)}
        isSuccess={boolean("isSuccess", false)}>
        {text("children", "Flash message goes here.")}
    </Flash>);
