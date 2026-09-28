import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperIconography } from './Iconography';
const meta = { title: 'Foundations/Iconography', component: PaperIconography, tags: ['!autodocs'], parameters: { layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperIconography>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
