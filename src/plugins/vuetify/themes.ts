import {lightThemeColors} from "@/plugins/vuetify/colors";

export const lightTheme = {
  dark: false,
  ...lightThemeColors,
}

export const theme = {
  defaultTheme: 'lightTheme',
  variations: {
    colors: ['primary', 'secondary'],
    lighten: 4,
    darken: 2,
  },
  themes: {
    lightTheme
  }
};
