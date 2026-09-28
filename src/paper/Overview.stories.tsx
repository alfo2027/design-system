import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaperOverview } from './Overview';
const meta = { title: 'Overview', component: PaperOverview, tags: ['!autodocs'], parameters: { layout: 'fullscreen', controls: { disable: true } } } satisfies Meta<typeof PaperOverview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Guide: Story = { name: '시작하기' };
