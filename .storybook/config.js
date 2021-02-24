import { configure as configureReact } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!../scss/main.scss';

configureReact(require.context('../src/', true, /\.stories\.js$/), module);
