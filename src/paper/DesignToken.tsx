// Imported from Paper; exact source is retained in source.json.
import './paper.css';
export function PaperDesignToken() { return (
    <main className="paper-document" style={{ backgroundColor: 'var(--color-surface)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '32px', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', WebkitFontSmoothing: 'antialiased', }}>
      <div style={{ borderBottomColor: 'var(--color-border)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, lineHeight: '18px' }}>
          FOUNDATIONS / 01 / DESIGN TOKEN
        </div>
        <h1 style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '60px' }}>
          Design Token
        </h1>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
          값에 이름을 붙이고, 역할에 연결하고, 컴포넌트에서 사용합니다.
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          01 토큰의 연결 구조
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '32px', whiteSpace: 'pre-wrap' }}>
          Scale — --color-gray-900 = #171717<br />Semantic — --color-text = var(--color-gray-900)<br />Component — 본문과 레이블에서 color: var(--color-text)로 사용
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          02 현재 등록된 역할 참조
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '32px', whiteSpace: 'pre-wrap' }}>
          --color-canvas → --color-gray-100 · 화면 바탕<br />--color-border → --color-gray-300 · 구분선<br />--color-text-muted → --color-gray-600 · 보조 설명
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          03 이름과 변경 규칙
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '32px', whiteSpace: 'pre-wrap' }}>
          수치가 바뀌어도 역할이 같으면 이름을 유지합니다.<br />같은 색이어도 용도가 다르면 역할을 분리합니다.<br />브랜드색 변경은 --color-primary, 회색 체계 변경은 --color-gray-*에서 시작합니다.
        </div>
      </div>
      <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-canvas)', borderRadius: 'var(--radius-lg)', boxSizing: 'border-box', display: 'flex', gap: '32px', padding: '24px' }}>
        <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center', width: '180px' }}>
          <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-surface)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
            저장하기
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            배경 --color-primary / 글자 --color-surface
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
            모서리 --radius-md / 높이 48px / Pretendard Medium 16px
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', gap: '8px', paddingTop: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
          모드 확장 / Light · Dark
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
          Paper에서는 --color-light-* / --color-dark-*로 선택합니다. 제품에서는 모드별 값을 --color-*에 연결합니다.<br />예: --color-surface → Light #FFFFFF / Dark #171717 · 전체 대응표는 02A / Color Modes를 확인하세요.
        </div>
      </div>
    </main>
  ); }
