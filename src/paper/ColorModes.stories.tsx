import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperColorModes } from './ColorModes';
const meta = { title: 'Foundations/Color Modes', component: PaperColorModes, tags: ['!autodocs'], parameters: { theme: 'light', layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperColorModes>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
