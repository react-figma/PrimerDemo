import React from 'react';
import Flash from "./Flash";
import {storiesOf} from "@storybook/react-native";


storiesOf('Flash', module)
    .add('Flash', () => <Flash>
            Flash message goes here
        </Flash>);
