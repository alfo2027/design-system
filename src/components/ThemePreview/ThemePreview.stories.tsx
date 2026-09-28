import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { Badge } from '../Badge/Badge';
import { Icon } from '../Icon/Icon';
import './ThemePreview.css';

function ThemePreview() {
  const [saved, setSaved] = useState(false);
  return <section className="theme-preview">
    <header><p className="theme-preview__eyebrow">LIVE COMPONENTS / COLOR MODES</p><h1>라이트·다크, 직접 확인하기</h1><p>상단 Light / Dark 메뉴로 테마를 바꾸고 직접 조작해 보세요. 테마를 바꾼 뒤 Interactions의 Rerun을 누르면 해당 테마로 동작을 검사합니다.</p></header>
    <div className="theme-preview__card">
      <h2>프로필 설정</h2>
      <TextField label="이메일" type="email" defaultValue="hello@example.com" hint="알림을 받을 이메일 주소입니다." />
      <TextField label="오류 상태" defaultValue="hello@" error="이메일 형식을 확인해주세요." />
      <TextField label="비활성 상태" disabled defaultValue="변경할 수 없는 값" />
      <div className="theme-preview__row"><Button onClick={() => setSaved(true)}><Icon name="Check" size={20} />저장하기</Button><Button variant="secondary" onClick={() => setSaved(false)}>초기화</Button><Button variant="tertiary">더 보기</Button><Button variant="danger">삭제</Button><Button disabled>비활성</Button></div>
      <p role="status">{saved ? '저장했습니다.' : '변경사항을 저장할 수 있습니다.'}</p>
    </div>
    <div className="theme-preview__row"><Badge>진행 중</Badge><Badge tone="success">완료</Badge><Badge tone="warning">확인 필요</Badge><Badge tone="danger">오류</Badge></div>
    <div className="theme-preview__raised"><h2>표면과 포인트 컬러</h2><p>밝기 차이로 표면의 깊이를 구분합니다.</p><div className="theme-preview__row">{(['violet', 'teal', 'rose'] as const).map((color, i) => <span key={color} className={`theme-preview__accent theme-preview__accent--${color}`}>{['디자인', '개발', '콘텐츠'][i]}</span>)}</div></div>
  </section>;
}
const meta = { title: 'Components/Theme Preview', component: ThemePreview, tags: ['!autodocs'], parameters: { controls: { disable: true } } } satisfies Meta<typeof ThemePreview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {
  name: '모드 전환',
  play: async ({ canvasElement, globals }) => {
    const dark = globals.theme === 'dark';
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: '이메일' });
    await userEvent.clear(input);
    await userEvent.type(input, 'hello@example.com');
    await expect(input).toHaveValue('hello@example.com');
    await userEvent.click(canvas.getByRole('button', { name: '저장하기' }));
    await expect(canvas.getByRole('status')).toHaveTextContent('저장했습니다.');
    await expect(canvas.getByRole('button', { name: '비활성' })).toBeDisabled();
    await expect(canvas.getByRole('button', { name: '저장하기' })).toHaveStyle({ color: dark ? 'rgb(23, 37, 84)' : 'rgb(255, 255, 255)' });
    await expect(input).toHaveStyle({ backgroundColor: dark ? 'rgb(23, 23, 23)' : 'rgb(255, 255, 255)' });
    await userEvent.click(canvas.getByRole('button', { name: '초기화' }));
    await expect(canvas.getByRole('status')).toHaveTextContent('변경사항을 저장할 수 있습니다.');
  },
};
