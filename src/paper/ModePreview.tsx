// Imported from Paper; exact source is retained in source.json.
import './paper.css';
export function PaperModePreview() { return (
    <main className="paper-document" style={{ backgroundColor: 'var(--color-surface)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)', fontSynthesis: 'none', gap: '32px', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', WebkitFontSmoothing: 'antialiased', }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, lineHeight: '20px' }}>
          COMPONENTS / 07A / COLOR MODES
        </div>
        <h1 style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '48px', fontWeight: 700, lineHeight: '60px' }}>
          밝기가 달라도, 같은 경험
        </h1>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
          크기·간격·서체는 그대로 유지합니다. 표면과 역할 색상만 모드에 맞춰 연결합니다.
        </div>
      </div>
      <div className="paper-row" style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
        <div style={{ backgroundColor: 'var(--color-light-canvas)', borderColor: 'var(--color-light-border)', borderRadius: 'var(--radius-lg)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '24px', padding: '32px', width: '640px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-light-text)', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
            Light / 라이트
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 700, lineHeight: '24px' }}>
              버튼 / 48px · 8px
            </div>
            <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-light-primary)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-light-on-primary)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  저장하기
                </div>
              </div>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-light-surface)', borderColor: 'var(--color-light-border-strong)', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-light-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  취소
                </div>
              </div>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-light-danger)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-light-on-danger)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  삭제
                </div>
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              Hover / Pressed / Disabled
            </div>
            <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-light-primary-hover)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-light-on-primary)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  호버
                </div>
              </div>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-light-primary-pressed)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-light-on-primary)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  눌림
                </div>
              </div>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-light-disabled-bg)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-light-disabled-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  비활성
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-light-surface)', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
              이메일 / Focus
            </div>
            <div className="paper-row" style={{ alignItems: 'center', borderColor: 'var(--color-light-focus)', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', paddingInline: '16px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: '#000000', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
                hello@example.com
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              입력 중인 항목을 포커스 링으로 표시합니다.
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-light-surface)', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-text)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
              이메일 / Error
            </div>
            <div className="paper-row" style={{ alignItems: 'center', borderColor: 'var(--color-light-danger)', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', paddingInline: '16px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-light-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
                hello@
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-danger)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              이메일 형식을 확인해주세요.
            </div>
          </div>
          <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: 'var(--color-light-primary-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-light-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                진행 중
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--color-light-success-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-light-success)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                완료
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--color-light-warning-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-light-warning)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                확인 필요
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--color-light-danger-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-light-danger)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                오류
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-light-surface-raised)', borderColor: 'var(--color-light-border)', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-text)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              표면의 깊이
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-light-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              중요한 정보는 밝기 차이와 선으로 구분합니다.
            </div>
            <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-light-accent-violet-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-violet)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                  디자인
                </div>
              </div>
              <div style={{ backgroundColor: 'var(--color-light-accent-teal-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-teal)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                  개발
                </div>
              </div>
              <div style={{ backgroundColor: 'var(--color-light-accent-rose-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-light-accent-rose)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                  콘텐츠
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'var(--color-dark-canvas)', borderColor: 'var(--color-dark-border)', borderRadius: 'var(--radius-lg)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '24px', padding: '32px', width: '640px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-text)', fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
            Dark / 다크
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-text)', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 700, lineHeight: '24px' }}>
              버튼 / 48px · 8px
            </div>
            <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-dark-primary)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-dark-on-primary)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  저장하기
                </div>
              </div>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-dark-surface)', borderColor: 'var(--color-dark-border-strong)', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-dark-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  취소
                </div>
              </div>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-dark-danger)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-dark-on-danger)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  삭제
                </div>
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              Hover / Pressed / Disabled
            </div>
            <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-dark-primary-hover)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-dark-on-primary)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  호버
                </div>
              </div>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-dark-primary-pressed)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-dark-on-primary)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  눌림
                </div>
              </div>
              <div className="paper-row" style={{ alignItems: 'center', backgroundColor: 'var(--color-dark-disabled-bg)', borderRadius: '8px', boxSizing: 'border-box', display: 'flex', height: '48px', justifyContent: 'center', paddingInline: '20px' }}>
                <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-dark-disabled-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, lineHeight: '20px' }}>
                  비활성
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-surface)', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-text)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
              이메일 / Focus
            </div>
            <div className="paper-row" style={{ alignItems: 'center', borderColor: 'var(--color-dark-focus)', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', paddingInline: '16px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-dark-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
                hello@example.com
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              입력 중인 항목을 포커스 링으로 표시합니다.
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-surface)', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-text)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
              이메일 / Error
            </div>
            <div className="paper-row" style={{ alignItems: 'center', borderColor: 'var(--color-dark-danger)', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '48px', paddingInline: '16px' }}>
              <div className="paper-row" style={{ boxSizing: 'border-box', color: 'var(--color-dark-text)', display: 'flex', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
                hello@
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-danger)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '20px' }}>
              이메일 형식을 확인해주세요.
            </div>
          </div>
          <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-primary-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-primary)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                진행 중
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--color-dark-success-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-success)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                완료
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--color-dark-warning-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-warning)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                확인 필요
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--color-dark-danger-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-danger)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                오류
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-dark-surface-raised)', borderColor: 'var(--color-dark-border)', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-text)', fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 700, lineHeight: '28px' }}>
              표면의 깊이
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '24px' }}>
              중요한 정보는 밝기 차이와 선으로 구분합니다.
            </div>
            <div className="paper-row" style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
              <div style={{ backgroundColor: 'var(--color-dark-accent-violet-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-violet)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                  디자인
                </div>
              </div>
              <div style={{ backgroundColor: 'var(--color-dark-accent-teal-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-teal)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                  개발
                </div>
              </div>
              <div style={{ backgroundColor: 'var(--color-dark-accent-rose-soft)', borderRadius: 'calc(infinity * 1px)', boxSizing: 'border-box', paddingBlock: '6px', paddingInline: '12px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-dark-accent-rose)', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                  콘텐츠
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '24px' }}>
        정적 디자인 예시입니다. 모드를 바꿀 때 글자·아이콘·테두리·배경 토큰을 함께 전환합니다. Focus 링은 버튼 바깥으로 3px 간격을 두고 2px 두께로 적용합니다.
      </div>
    </main>
  ); }
