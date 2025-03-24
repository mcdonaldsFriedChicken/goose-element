export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";

export type ButtonSize = "large" | "default" | "small";

export type NativeType = "button" | "submit" | "reset";

export interface ButtonProps {
  tag?: string;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
}