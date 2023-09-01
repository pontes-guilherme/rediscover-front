import {lightThemeColors} from "@/plugins/vuetify/colors";

export const lightTheme = {
  dark: false,
  ...lightThemeColors,
}

export const theme = {
  defaultTheme: 'lightTheme',
  themes: {
    lightTheme
  }
};
