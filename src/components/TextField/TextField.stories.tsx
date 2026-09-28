import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { TextField } from './TextField';
const meta = {
  title: 'Components/TextField', component: TextField,
  args: { label: '이메일', type: 'email', placeholder: '이메일을 입력하세요', hint: '안내 문구를 입력하세요.', disabled: false },
  parameters: { docs: { description: { component: '입력창 높이 48px. 레이블은 항상 표시하고 오류 메시지를 입력창에 연결합니다. Focus는 입력창을 클릭하거나 Tab을 눌러 확인하세요.' } } },
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Error: Story = { args: { defaultValue: 'hello@', error: '이메일 형식을 확인해주세요.' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: '변경할 수 없는 값', hint: '현재 수정할 수 없습니다.' } };
export const AllStates: Story = { render: () => <div className="story-row"><TextField label="기본" placeholder="이메일을 입력하세요" hint="안내 문구" /><TextField label="오류" defaultValue="hello@" error="이메일 형식을 확인해주세요." /><TextField label="비활성" disabled defaultValue="변경할 수 없는 값" /></div> };
export const Typing: Story = {
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox', { name: '이메일' });
    await userEvent.clear(input);
    await userEvent.type(input, 'hello@example.com');
    await expect(input).toHaveValue('hello@example.com');
    await expect(input).toHaveAccessibleDescription('안내 문구를 입력하세요.');
  },
};
