import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperLayout } from './Layout';
const meta = { title: 'Foundations/Layout', component: PaperLayout, tags: ['!autodocs'], parameters: { layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
