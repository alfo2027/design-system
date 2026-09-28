import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperColor } from './Color';
const meta = { title: 'Foundations/Color', component: PaperColor, tags: ['!autodocs'], parameters: { layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
