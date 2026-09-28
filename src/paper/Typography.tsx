// Imported from Paper; exact source is retained in source.json.
import './paper.css';
export function PaperTypography() { return (
    <main className="paper-document" style={{ backgroundColor: 'var(--color-surface)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '32px', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', WebkitFontSmoothing: 'antialiased', }}>
      <div style={{ borderBottomColor: 'var(--color-border)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, lineHeight: '18px' }}>
          FOUNDATIONS / 03 / TYPOGRAPHY
        </div>
        <h1 style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '60px' }}>
          Typography
        </h1>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
          Pretendard · 7단계 크기 체계 · Scale과 사용 역할을 함께 정의합니다.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
          Scale · 크기 / 굵기 / 행간을 조합한 스타일
        </div>
        <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px', width: '200px' }}>
            Display / 48px / 700
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', fontWeight: 700, lineHeight: 'var(--leading-3xl)' }}>
            더 나은 경험을 만듭니다
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px', width: '200px' }}>
            Heading / 32px / 700
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xl)', fontWeight: 700, lineHeight: 'var(--leading-2xl)' }}>
            화면의 핵심을 명확하게
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px', width: '200px' }}>
            Title / 24px / 700
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xl)', fontWeight: 700, lineHeight: 'var(--leading-xl)' }}>
            콘텐츠를 구분하는 제목
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', fontFamily: 'var(--font-sans)', gap: '32px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px', width: '200px' }}>
            Subtitle / 20px / 500
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', fontWeight: 500, lineHeight: 'var(--leading-lg)' }}>
            정보를 연결하는 작은 제목
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px', width: '200px' }}>
            Body / 16px / 400
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-base)' }}>
            누구나 쉽게 읽을 수 있는 본문입니다. Design for everyone.
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px', width: '200px' }}>
            Label / 14px / 500
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 500, lineHeight: 'var(--leading-sm)' }}>
            필드 이름 · 보조 설명
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px', width: '200px' }}>
            Caption / 12px / 400
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', lineHeight: 'var(--leading-xs)' }}>
            보조 정보에만 제한적으로 사용합니다.
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          Semantic usage · 역할별 적용
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '32px', whiteSpace: 'pre-wrap' }}>
          화면 제목 → Heading / 32px · 44px · Bold<br />섹션 제목 → Title / 24px · 32px · Bold<br />소제목 → Subtitle / 20px · 28px · Medium<br />본문 → Body / 16px · 24px · Regular<br />필드 레이블 → Label / 14px · 20px · Medium<br />기본 버튼 → 16px · 20px · Medium
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          사용 기준
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '32px', whiteSpace: 'pre-wrap' }}>
          화면의 제목 단계에 따라 스타일을 선택하고 같은 역할에 같은 스타일을 사용합니다.<br />48px Display는 넓은 화면의 소개 영역에 사용합니다. 좁은 화면에서는 제목 크기와 줄바꿈을 함께 조정합니다.<br />Paper 표본은 px 단위입니다. 구현 시 웹의 rem, 앱의 글자 확대 설정에 대응합니다.
        </div>
      </div>
    </main>
  ); }
