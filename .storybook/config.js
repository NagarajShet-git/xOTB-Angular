import { configure, addParameters } from '@storybook/angular';
import theme from './theme';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
  require('src/stories/welcome/welcome.stories.ts');
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme,
    isToolshown: true,
    showPanel: false
  }
});
configure(loadStories, module);
