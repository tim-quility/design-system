import { semanticColors } from '../semantics/colors';

export const buttonTokens = {
  radius: {
    default: '5px',
    icon: '6px',
  },

  padding: {
    text: '14px 16px',
    icon: '14px 16px',
    tertiary: '2px 8px',
  },

  borderWidth: {
    default: '2px',
  },

  primary: {
    background: semanticColors.action.primary,
    border: {
      default: 'transparent',
      focus: semanticColors.border.focus,
    },
  },

  secondary: {
    background: {
      hover: semanticColors.surface.hover,
      active: semanticColors.surface.active,
    },
    border: {
      default: semanticColors.border.default,
      destructive: semanticColors.border.destructive,
    },
  },

  tertiary: {
    background: {
      hover: semanticColors.surface.hover,
      active: semanticColors.surface.active,
    },
  },

  destructive: {
    background: semanticColors.action.destructive,
    border: semanticColors.border.destructive,
  },
} as const;
