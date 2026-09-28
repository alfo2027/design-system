// Imported from Paper; exact source is retained in source.json.
import './paper.css';
export function PaperGuidelines() { return (
    <main className="paper-document" style={{ backgroundColor: 'var(--color-surface)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', fontSynthesis: 'none', gap: 'var(--spacing-8)', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', WebkitFontSmoothing: 'antialiased', }}>
      <div style={{ borderBottomColor: 'var(--color-border)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, lineHeight: '18px' }}>
          DESIGN SYSTEM / 06 / USAGE GUIDELINES
        </div>
        <h1 style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '60px' }}>
          함께 쓰고, 차근차근 확장하기
        </h1>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '20px' }}>
          웹 · 앱 공통 규칙과 플랫폼별 적용 기준
        </div>
      </div>
      <div className="paper-row" style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '32px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px', whiteSpace: 'pre-wrap', width: '240px' }}>
          01{'  '}이름과 토큰
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '1040px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            토큰: --color-primary / --text-base / --spacing-4 / --radius-md
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            레이어: Button / Primary / Default · Input / Error · Badge / Success
          </div>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
            색상은 역할 이름으로 참조합니다. --spacing-4는 4 × 4 = 16px입니다.
          </div>
        </div>
      </div>
      <div className="paper-row" style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '32px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px', whiteSpace: 'pre-wrap', width: '240px' }}>
          02{'  '}사용 원칙
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '1040px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            하나의 작업 영역에는 가장 중요한 Primary 버튼 하나를 우선합니다.
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            입력창에는 레이블을 유지하고, 오류에는 해결 방법을 글로 설명합니다.
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            키보드 포커스를 표시하고, 상태는 색상에 더해 텍스트로 전달합니다.
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            비활성 버튼은 Disabled 색상 토큰을 사용합니다. 투명도를 추가로 낮추지 않습니다.
          </div>
        </div>
      </div>
      <div className="paper-row" style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '32px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px', whiteSpace: 'pre-wrap', width: '240px' }}>
          03{'  '}확장 순서
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '1040px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            다음 컴포넌트 → 체크박스 · 라디오 · 스위치 · 탭 · 모달 · 알림
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            다음 화면 패턴 → 로그인 · 설정 · 목록 · 빈 화면 · 오류 화면
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            운영 전 점검 → 실제 콘텐츠 · 좁은 화면 · 글자 확대 · 키보드 사용
          </div>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '24px' }}>
            현재 범위: 라이트 테마 토큰과 정적 컴포넌트 시안. 앱 동작과 코드 연결은 후속 단계에서 정의합니다.
          </div>
        </div>
      </div>
    </main>
  ); }
