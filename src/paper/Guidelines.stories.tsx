import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperGuidelines } from './Guidelines';
const meta = { title: 'Guidelines', component: PaperGuidelines, tags: ['!autodocs'], parameters: { theme: 'light', layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperGuidelines>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
