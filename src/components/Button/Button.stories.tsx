import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';
const meta = {
  title: 'Components/Button', component: Button,
  args: { children: '버튼', variant: 'primary', disabled: false },
  argTypes: { variant: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary', 'danger'] } },
  parameters: { docs: { description: { component: 'Paper 기준: 높이 48px, 모서리 8px, Pretendard Medium 16px. Tab으로 포커스, 마우스로 Hover, 눌러서 Pressed 상태를 확인하세요.' } } },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Tertiary: Story = { args: { variant: 'tertiary' } };
export const Danger: Story = { args: { variant: 'danger', children: '삭제하기' } };
export const Disabled: Story = { args: { disabled: true } };
export const WithIcon: Story = { args: { children: <><Icon name="Plus" size={20} />추가하기</> } };
export const AllVariants: Story = { render: () => <div className="story-row">{(['primary', 'secondary', 'tertiary', 'danger'] as const).map(variant => <Button key={variant} variant={variant}>{variant}</Button>)}</div> };
function Counter() {
  const [count, setCount] = useState(0);
  return <div className="story-stack"><Button onClick={() => setCount(count + 1)}>추가</Button><Button disabled onClick={() => setCount(count + 1)}>비활성</Button><output aria-label="클릭 횟수">{count}</output></div>;
}
export const Interaction: Story = {
  render: () => <Counter />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: '추가' }));
    await expect(canvas.getByLabelText('클릭 횟수')).toHaveTextContent('1');
    await userEvent.click(canvas.getByRole('button', { name: '비활성' }));
    await expect(canvas.getByLabelText('클릭 횟수')).toHaveTextContent('1');
  },
};
