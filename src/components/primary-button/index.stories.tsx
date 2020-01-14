import * as React from 'react';
import PrimaryButton from "./PrimaryButton.web";
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import {defaultBackground} from "../storybook-decorators/DefaultBackground";


storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .addDecorator(defaultBackground)
    .add('Primary Button', () => <PrimaryButton
        isSmall={boolean("isSmall", false)}>
        {text("children", "Primary Button")}
    </PrimaryButton>);
