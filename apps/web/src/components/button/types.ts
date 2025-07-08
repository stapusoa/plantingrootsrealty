import type { ButtonSize, ButtonColor, ButtonVariant } from './constants'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  as?: React.ElementType;
  loading?: boolean;
  linkStyle?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}