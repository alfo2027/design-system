import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperModePreview } from './ModePreview';
const meta = { title: 'Components/Paper Modes', component: PaperModePreview, tags: ['!autodocs'], parameters: { theme: 'light', layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperModePreview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
