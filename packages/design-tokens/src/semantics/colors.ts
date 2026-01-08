import { colors } from '../primitives/colors';

export const semanticColors = {
  action: {
    primary: {
      default: colors.brand.green[700],
      hover: colors.brand.green[800],
      active: colors.brand.green[900],
      disabled: colors.neutral[300],
    },

    destructive: {
      default: colors.destructive[700],
      hover: colors.destructive[800],
      active: colors.destructive[900],
      subtleHover: colors.destructive[100],
      subtleActive: colors.destructive[200],
      disabled: colors.neutral[300],
    },
  },

  surface: {
    hover: colors.neutral[100],
    active: colors.neutral[200],
    disabled: colors.neutral[300],
  },

  border: {
    default: colors.brand.green[700],
    destructive: colors.destructive[700],
    disabled: colors.neutral[400],
    focus: colors.focus.ring,
  },
} as const;
