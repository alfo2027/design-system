import { createElement } from 'react';
import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.css';

const preview: Preview = {
  tags: ['autodocs'],
  initialGlobals: { theme: 'light' },
  globalTypes: {
    theme: {
      description: '컴포넌트 색상 모드',
      toolbar: {
        title: '컬러 모드', icon: 'circlehollow', dynamicTitle: true,
        items: [{ value: 'light', title: 'Light' }, { value: 'dark', title: 'Dark' }],
      },
    },
  },
  decorators: [(Story, context) => createElement('div', {
    'data-theme': context.parameters.theme ?? context.globals.theme ?? 'light',
    className: `story-theme${context.parameters.theme === 'light' ? ' story-theme--document' : ''}${context.viewMode === 'docs' ? ' story-theme--docs' : ''}`,
  }, createElement(Story))],
  parameters: {
    layout: 'fullscreen',
    options: { storySort: { order: ['Overview', 'Foundations', ['Design Token', 'Color', 'Color Modes', 'Typography', 'Iconography', 'Layout'], 'Guidelines', 'Components', ['Theme Preview', 'Button', 'TextField', 'Badge', 'Icon', 'Paper Reference', 'Paper Modes']] } },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};
export default preview;
