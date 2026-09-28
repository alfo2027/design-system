// Imported from Paper; exact source is retained in source.json.
import './paper.css';
export function PaperLayout() { return (
    <main className="paper-document" style={{ backgroundColor: 'var(--color-surface)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '32px', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', WebkitFontSmoothing: 'antialiased', }}>
      <div style={{ borderBottomColor: 'var(--color-border)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, lineHeight: '18px' }}>
          FOUNDATIONS / 05 / LAYOUT · SPACING · RADIUS
        </div>
        <h1 style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '60px' }}>
          Layout & rhythm
        </h1>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
          화면 폭, 요소 간격, 모서리의 기준을 웹·앱에 공통으로 적용합니다.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
          01 레이아웃 기본값
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
          <div style={{ backgroundColor: 'var(--color-canvas)', borderRadius: 'var(--radius-lg)', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '12px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '30px' }}>
              Mobile
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              390px 시안 / 4열 / 바깥 여백 16
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              단일 열 우선 · 터치 영역 48 이상
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-canvas)', borderRadius: 'var(--radius-lg)', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '12px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '30px' }}>
              Tablet
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              768px 시안 / 8열 / 바깥 여백 32
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              공간에 따라 1–2열로 전환
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-canvas)', borderRadius: 'var(--radius-lg)', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '12px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '30px' }}>
              Desktop
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              1440px 시안 / 12열 / 최대 폭 1280
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              좌우 중앙 정렬 · 열 사이 24
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
          웹 분기점: 640 / 768 / 1024 / 1440px · 앱에서는 pt·dp로 매핑하고 안전 영역과 글자 확대를 반영합니다.
        </div>
      </div>
      <div className="paper-row" style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '64px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '16px', width: '720px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
            02{'  '}Spacing · 4px 단위
          </div>
          <div className="paper-row" style={{ alignItems: 'end', boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '60px' }}>
              <div style={{ backgroundColor: 'var(--color-primary)', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '4px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                4px
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '60px' }}>
              <div style={{ backgroundColor: 'var(--color-primary)', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '8px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                8px
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '60px' }}>
              <div style={{ backgroundColor: 'var(--color-primary)', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '12px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                12px
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '60px' }}>
              <div style={{ backgroundColor: 'var(--color-primary)', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '16px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                16px
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '60px' }}>
              <div style={{ backgroundColor: 'var(--color-primary)', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '24px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                24px
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '60px' }}>
              <div style={{ backgroundColor: 'var(--color-primary)', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '32px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                32px
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '60px' }}>
              <div style={{ backgroundColor: 'var(--color-primary)', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '48px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                48px
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '60px' }}>
              <div style={{ backgroundColor: 'var(--color-primary)', boxSizing: 'border-box', flexShrink: '0', height: '32px', width: '64px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                64px
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
            요소 내부 8–16 / 그룹 사이 24–32 / 섹션 사이 48–64
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
            03{'  '}Radius · 모서리
          </div>
          <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
            <div className="paper-row" style={{ alignItems: 'center', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-sm)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '56px', justifyContent: 'center', width: '80px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: '#000000', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                4px
              </div>
            </div>
            <div className="paper-row" style={{ alignItems: 'center', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '56px', justifyContent: 'center', width: '80px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: '#000000', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                8px
              </div>
            </div>
            <div className="paper-row" style={{ alignItems: 'center', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-lg)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '56px', justifyContent: 'center', width: '80px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: '#000000', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                12px
              </div>
            </div>
            <div className="paper-row" style={{ alignItems: 'center', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-full)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '56px', justifyContent: 'center', width: '80px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: '#000000', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                Full
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          사용 기준
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '32px', whiteSpace: 'pre-wrap' }}>
          화면 폭과 열 수는 출발점이며 콘텐츠에 맞춰 조정합니다.<br />간격은 4px 단위로 선택하고, 같은 그룹 내부보다 그룹 사이를 넓게 둡니다.<br />기본 입력 요소는 8px, 큰 컨테이너는 12px, 배지는 Full 모서리를 사용합니다.
        </div>
      </div>
    </main>
  ); }
