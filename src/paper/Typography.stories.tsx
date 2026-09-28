import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperTypography } from './Typography';
const meta = { title: 'Foundations/Typography', component: PaperTypography, tags: ['!autodocs'], parameters: { theme: 'light', layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperTypography>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
