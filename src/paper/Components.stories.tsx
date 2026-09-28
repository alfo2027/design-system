import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperComponents } from './Components';
const meta = { title: 'Components/Paper Reference', component: PaperComponents, tags: ['!autodocs'], parameters: { theme: 'light', layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperComponents>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
