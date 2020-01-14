import { configure } from '@storybook/react';
import "../src/styles/fonts.css";
import "../src/styles/reset.css";

configure(require.context('../src', true, /\.stories\.tsx$/), module);
