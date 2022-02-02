import { configure } from '@storybook/angular';

configure(require.context('../stories', true, /\.stories\.[tj]s$/), module);
