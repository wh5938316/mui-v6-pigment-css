import { CssVarsThemeOptions, PaletteMode, ThemeOptions } from '@mui/material/styles';
import { dataDisplayCustomizations } from './customizations/dataDisplay';

export function getTheme(mode: PaletteMode): CssVarsThemeOptions {
  return {
    components: {
      ...dataDisplayCustomizations,
    }
  }
}