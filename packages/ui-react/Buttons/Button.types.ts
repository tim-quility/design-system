/**
 * Button component types and variant axes.
 * 
 * Variant Axes (from Figma node 5924-47094):
 * - hierarchy: "primary" | "secondary" | "tertiary"
 * - size: "sm" | "md" | "lg"
 * - state: "default" | "hover" | "active" | "disabled" | "loading"
 * - intent: "default" | "destructive"
 * - icon: position of icon relative to label
 */

export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonState = 'default' | 'hover' | 'active' | 'disabled' | 'loading';
export type ButtonIntent = 'default' | 'destructive';
export type ButtonIconPosition = 'start' | 'end' | 'only';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual hierarchy of the button */
  hierarchy?: ButtonHierarchy;

  /** Size of the button */
  size?: ButtonSize;

  /** Intent (semantic meaning) */
  intent?: ButtonIntent;

  /** Icon element (React node) */
  icon?: React.ReactNode;

  /** Position of icon relative to label */
  iconPosition?: ButtonIconPosition;

  /** Loading state (shows spinner, disables interaction) */
  isLoading?: boolean;

  /** Accessibility: aria-label for icon-only buttons or overrides */
  ariaLabel?: string;

  /** Children (button text) */
  children?: React.ReactNode;

  /** CSS class name to merge */
  className?: string;
}

/**
 * Resolved button state based on props.
 * Used internally to compute final CSS classes.
 */
export interface ResolvedButtonState {
  hierarchy: ButtonHierarchy;
  size: ButtonSize;
  intent: ButtonIntent;
  state: ButtonState;
  hasIcon: boolean;
  iconPosition: ButtonIconPosition;
  isIconOnly: boolean;
}
