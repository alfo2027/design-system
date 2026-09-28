// Imported from Paper; exact source is retained in source.json.
import './paper.css';
export function PaperComponents() { return (
    <main className="paper-document" style={{ backgroundColor: 'var(--color-surface)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', fontSynthesis: 'none', gap: 'var(--spacing-8)', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', WebkitFontSmoothing: 'antialiased', }}>
      <div style={{ borderBottomColor: 'var(--color-border)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, lineHeight: '18px' }}>
          DESIGN SYSTEM / 07 / COMPONENTS
        </div>
        <h1 style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '60px' }}>
          작은 요소부터 같은 언어로
        </h1>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '20px' }}>
          편집 가능한 기본 시안 · 상태는 정적 예시입니다.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
          01 버튼 · 기본 높이 48px / 모서리 8px
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '240px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Primary
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center', paddingInline: '24px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-surface)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                버튼
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '240px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Secondary
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center', paddingInline: '24px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                버튼
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '240px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Tertiary
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-primary-soft)', borderColor: 'var(--color-primary-soft)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center', paddingInline: '24px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-primary)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                버튼
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '240px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Danger
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-danger)', borderColor: 'var(--color-danger)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center', paddingInline: '24px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-surface)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                삭제하기
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
          Primary 상태 · Hover는 웹 / Pressed는 웹·앱
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '240px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Default
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-surface)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                저장하기
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '240px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Hover / Pressed
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-primary-hover)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-surface)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                저장하기
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '240px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Focus
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center', outline: '2px solid var(--color-primary)', outlineOffset: '3px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-surface)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                저장하기
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '240px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Disabled
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-disabled-bg)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', justifyContent: 'center' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-disabled-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                저장하기
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
          02 입력창 · 레이블과 안내 문구를 함께 사용
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '304px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Default
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
              이메일
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', paddingInline: '16px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '20px' }}>
                이메일을 입력하세요
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              안내 문구를 입력하세요.
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '304px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Focus
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
              이메일
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-primary)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '2px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', paddingInline: '16px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '20px' }}>
                hello@example.com
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              입력 중인 항목을 표시합니다.
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '304px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Error
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
              이메일
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-danger)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', paddingInline: '16px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '20px' }}>
                hello@
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-danger)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              이메일 형식을 확인해주세요.
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '304px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              Disabled
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
              이메일
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-canvas)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', paddingInline: '16px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-disabled-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '20px' }}>
                변경할 수 없는 값
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              현재 수정할 수 없습니다.
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
          03 상태 배지 · 색상과 글자를 함께 표시
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '16px' }}>
          <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-primary-soft)', borderRadius: 'var(--radius-full)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', paddingBlock: '8px', paddingInline: '16px' }}>
            <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-primary)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
              진행 중
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-success-soft)', borderRadius: 'var(--radius-full)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', paddingBlock: '8px', paddingInline: '16px' }}>
            <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-success)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
              완료
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-warning-soft)', borderRadius: 'var(--radius-full)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', paddingBlock: '8px', paddingInline: '16px' }}>
            <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-warning)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
              확인 필요
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-danger-soft)', borderRadius: 'var(--radius-full)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', paddingBlock: '8px', paddingInline: '16px' }}>
            <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-danger)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
              오류
            </div>
          </div>
        </div>
      </div>
    </main>
  ); }
