import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, iconNames } from './Icon';
const meta = { title: 'Components/Icon', component: Icon, args: { name: 'Search', size: 24, label: '검색' }, argTypes: { name: { control: 'select', options: iconNames }, size: { control: 'inline-radio', options: [20, 24] } }, parameters: { docs: { description: { component: 'Paper에서 추출한 SVG 24종입니다. 색은 currentColor를 따릅니다. 단독 정보 아이콘에는 label을, 장식 아이콘에는 label을 생략하세요. 아이콘 버튼은 버튼 자체에 aria-label을 지정합니다.' } } } } satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Library: Story = { parameters: { layout: 'fullscreen' }, render: () => <div className="story-grid">{iconNames.map(name => <div key={name} className="story-icon"><Icon name={name} label={name} /><code>{name}</code></div>)}</div> };
