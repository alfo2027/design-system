import type { ComponentPropsWithoutRef } from 'react';
import './Badge.css';
export type BadgeProps = ComponentPropsWithoutRef<'span'> & { tone?: 'primary' | 'success' | 'warning' | 'danger' };
export function Badge({ tone = 'primary', className = '', ...props }: BadgeProps) {
  return <span className={`badge badge--${tone} ${className}`.trim()} {...props} />;
}
