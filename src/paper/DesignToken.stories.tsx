import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperDesignToken } from './DesignToken';
const meta = { title: 'Foundations/Design Token', component: PaperDesignToken, tags: ['!autodocs'], parameters: { theme: 'light', layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperDesignToken>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '가이드' };
