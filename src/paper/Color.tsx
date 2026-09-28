// Imported from Paper; exact source is retained in source.json.
import './paper.css';
export function PaperColor() { return (
    <main className="paper-document" style={{ backgroundColor: 'var(--color-surface)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', fontSynthesis: 'none', gap: 'var(--spacing-8)', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', WebkitFontSmoothing: 'antialiased', }}>
      <div style={{ borderBottomColor: 'var(--color-border)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, lineHeight: '18px' }}>
          FOUNDATIONS / 02 / COLOR
        </div>
        <h1 style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-3xl)' }}>
          Color
        </h1>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
          Overview · Roles · Palette / 색의 값과 사용 목적을 함께 정의합니다.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
          역할별 색상 · Roles
        </div>
        <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '16px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '205px' }}>
            <div style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '64px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
              Surface
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              #FFFFFF · surface
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '205px' }}>
            <div style={{ backgroundColor: 'var(--color-canvas)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '64px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
              Canvas
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              #F5F5F5 · canvas
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '205px' }}>
            <div style={{ backgroundColor: 'var(--color-text)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '64px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
              Text
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              #171717 · text
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '205px' }}>
            <div style={{ backgroundColor: 'var(--color-text-muted)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '64px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
              Muted
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              #525252 · text-muted
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '205px' }}>
            <div style={{ backgroundColor: 'var(--color-border)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '64px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
              Border
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              #D4D4D4 · border
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '205px' }}>
            <div style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '64px' }} />
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
              Primary
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
              #1D4ED8 · primary
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', gap: '12px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
            Grayscale · 50–900 / White는 별도 Surface 토큰
          </div>
          <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-50)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 50
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #FAFAFA
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-100)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 100
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #F5F5F5
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-200)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 200
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #E5E5E5
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-300)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 300
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #D4D4D4
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-400)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 400
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #A3A3A3
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-500)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 500
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #737373
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-600)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 600
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #525252
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-700)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 700
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #404040
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-800)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 800
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #262626
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-gray-900)', borderColor: 'var(--color-border)', borderRadius: 'var(--radius-md)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '56px' }} />
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Gray 900
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: '16px' }}>
                #171717
              </div>
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', gap: '12px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
            Accent · 카테고리와 콘텐츠 강조에 사용
          </div>
          <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-accent-violet-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexGrow: '1', gap: '16px', padding: '16px' }}>
              <div style={{ backgroundColor: 'var(--color-accent-violet)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box', flexShrink: '0', height: '56px', width: '64px' }} />
              <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-accent-violet)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
                  Violet · #7C3AED
                </div>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-accent-violet)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                  accent-violet / soft
                </div>
              </div>
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-accent-teal-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexGrow: '1', gap: '16px', padding: '16px' }}>
              <div style={{ backgroundColor: 'var(--color-accent-teal)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box', flexShrink: '0', height: '56px', width: '64px' }} />
              <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-accent-teal)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
                  Teal · #0F766E
                </div>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-accent-teal)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                  accent-teal / soft
                </div>
              </div>
            </div>
            <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-accent-rose-soft)', borderRadius: 'var(--radius-md)', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexGrow: '1', gap: '16px', padding: '16px' }}>
              <div style={{ backgroundColor: 'var(--color-accent-rose)', borderRadius: 'var(--radius-sm)', boxSizing: 'border-box', flexShrink: '0', height: '56px', width: '64px' }} />
              <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-accent-rose)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
                  Rose · #BE185D
                </div>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-accent-rose)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '18px' }}>
                  accent-rose / soft
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: 'var(--color-border)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
          사용 기준 · 역할을 먼저 선택
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '32px', whiteSpace: 'pre-wrap' }}>
          주요 행동 → Primary / 본문 → Text / 보조 설명 → Muted<br />콘텐츠 분류·강조 → Accent / 완료·주의·오류 → Success · Warning · Danger<br />화면에서는 역할 토큰을 먼저 사용합니다. Gray 스케일은 역할을 정의하거나 팔레트를 확장할 때 사용합니다.<br />라이트·다크의 역할별 값과 조합은 02A / Color Modes를 확인하세요.
        </div>
      </div>
    </main>
  ); }
