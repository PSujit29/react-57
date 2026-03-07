export interface IButton {
  txt?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
