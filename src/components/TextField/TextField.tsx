import { useId, type ComponentPropsWithoutRef } from 'react';
import './TextField.css';
export type TextFieldProps = ComponentPropsWithoutRef<'input'> & { label: string; hint?: string; error?: string; };
export function TextField({ label, hint, error, id, className = '', 'aria-describedby': describedBy, 'aria-invalid': invalid, ...props }: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const message = error || hint;
  const messageId = `${inputId}-message`;
  return (
    <div className={`text-field ${error ? 'text-field--error' : ''} ${className}`.trim()}>
      <label htmlFor={inputId}>{label}</label>
      <input {...props} id={inputId} aria-invalid={error ? true : invalid} aria-describedby={[describedBy, message ? messageId : undefined].filter(Boolean).join(' ') || undefined} />
      {message && <p id={messageId} className="text-field__message">{message}</p>}
    </div>
  );
}
