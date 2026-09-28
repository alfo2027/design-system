// Imported from Paper; exact source is retained in source.json.
import './paper.css';
export function PaperColorModes() { return (
    <main className="paper-document" style={{ backgroundColor: 'var(--color-surface)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', fontSynthesis: 'none', gap: '32px', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', WebkitFontSmoothing: 'antialiased', }}>
      <div style={{ borderBottomColor: 'var(--color-border)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, lineHeight: '20px' }}>
          FOUNDATIONS / 02A / COLOR MODES
        </div>
        <h1 style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '60px' }}>
          같은 역할, 두 가지 밝기
        </h1>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
          Light · Dark / 그레이 10단계는 공통으로 유지하고 역할에 연결하는 색을 바꿉니다.
        </div>
      </div>
      <div className="mode-table-scroll" role="region" aria-label="라이트·다크 색상 대응표" tabIndex={0}><div className="mode-table" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div className="paper-row" style={{ borderBottomColor: 'var(--color-border)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '16px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px', width: '400px' }}>
            01 / 기본 역할
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px', width: '440px' }}>
            Light
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px', width: '440px' }}>
            Dark
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              canvas
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              화면 배경
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-canvas)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #F5F5F5
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-canvas)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #0F0F0F
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              surface
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              기본 표면
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-surface)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #FFFFFF
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-surface)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #171717
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              surface-raised
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              떠 있는 표면
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-surface-raised)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #FFFFFF
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-surface-raised)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #262626
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              text
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              본문
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-text)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #171717
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-text)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #FAFAFA
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              text-muted
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              보조 설명
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-text-muted)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #525252
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-text-muted)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #A3A3A3
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              border
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              장식 구분선
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-border)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #D4D4D4
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-border)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #404040
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              border-strong
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              입력창 경계
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-border-strong)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #737373
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-border-strong)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #737373
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              primary
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              주요 행동·링크
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-primary)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #1D4ED8
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-primary)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #93C5FD
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              on-primary
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              주요 버튼 글자
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-on-primary)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #FFFFFF
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-on-primary)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #172554
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              primary-hover
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              호버
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-primary-hover)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #1E40AF
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-primary-hover)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #BFDBFE
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              primary-pressed
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              눌림
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-primary-pressed)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #1E3A8A
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-primary-pressed)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #60A5FA
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              primary-soft
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              선택 배경
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-primary-soft)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #EFF6FF
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-primary-soft)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #172554
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              focus
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              포커스 링
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-focus)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #1D4ED8
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-focus)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #93C5FD
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              disabled-bg
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              비활성 배경
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-disabled-bg)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #E5E5E5
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-disabled-bg)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #262626
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ alignItems: 'center', borderBottomColor: 'var(--color-gray-200)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '12px' }}>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '400px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '24px', width: '196px' }}>
              disabled-text
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              비활성 글자
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-light-disabled-text)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #737373
            </div>
          </div>
          <div className="paper-row" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '440px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-disabled-text)', borderColor: 'var(--color-border)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '56px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              #737373
            </div>
          </div>
        </div>
      </div></div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          02 / 상태색과 포인트 컬러
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
          왼쪽 Light · 오른쪽 Dark / 각 색은 전경과 soft 배경을 함께 사용합니다.
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ backgroundColor: 'var(--color-light-success-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-success)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              완료 · success
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-success)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #166534 / soft #F0FDF4
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-success-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-success)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              완료 · success
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-success)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #86EFAC / soft #052E16
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ backgroundColor: 'var(--color-light-warning-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-warning)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              주의 · warning
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-warning)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #92400E / soft #FFFBEB
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-warning-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-warning)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              주의 · warning
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-warning)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #FCD34D / soft #451A03
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ backgroundColor: 'var(--color-light-danger-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-danger)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              오류·삭제 · danger
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-danger)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #B91C1C / soft #FEF2F2
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-danger-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-danger)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              오류·삭제 · danger
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-danger)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #FCA5A5 / soft #450A0A
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ backgroundColor: 'var(--color-light-accent-violet-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-violet)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              바이올렛 · accent-violet
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-violet)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #7C3AED / soft #F5F3FF
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-accent-violet-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-violet)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              바이올렛 · accent-violet
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-violet)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #C4B5FD / soft #2E1065
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ backgroundColor: 'var(--color-light-accent-teal-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-teal)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              틸 · accent-teal
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-teal)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #0F766E / soft #F0FDFA
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-accent-teal-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-teal)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              틸 · accent-teal
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-teal)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #5EEAD4 / soft #042F2E
            </div>
          </div>
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ backgroundColor: 'var(--color-light-accent-rose-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-rose)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              로즈 · accent-rose
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-rose)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #BE185D / soft #FFF1F2
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-accent-rose-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '640px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-rose)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              로즈 · accent-rose
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-rose)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              #FDA4AF / soft #4C0519
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          03 / 적용 기준
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
          Paper: --color-light-* / --color-dark-*에서 같은 역할을 선택합니다.<br />제품 코드: 모드에 따라 --color-* 역할 토큰을 매핑합니다. 그레이 팔레트 자체를 뒤집지 않습니다.<br />주요 버튼: primary + on-primary / 삭제 버튼: danger + on-danger를 함께 사용합니다.<br />on-danger: Light #FFFFFF · Dark #450A0A / 입력창 경계는 border-strong, 장식 구분선은 border를 사용합니다.<br />다크 표면은 canvas → surface → surface-raised 순으로 밝아집니다. 비활성 글자는 필수 정보를 전달하지 않습니다.
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '24px' }}>
          검증한 본문·버튼·배지 조합 26개: 최소 대비 5.20:1. 임의 배경이나 투명도를 적용한 조합은 별도로 확인합니다.
        </div>
      </div>
    </main>
  ); }
