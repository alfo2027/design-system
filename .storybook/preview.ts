import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    options: { storySort: { order: ['Overview', 'Foundations', ['Design Token', 'Color', 'Typography', 'Iconography', 'Layout'], 'Guidelines', 'Components', ['Button', 'TextField', 'Badge', 'Icon', 'Paper Reference']] } },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
