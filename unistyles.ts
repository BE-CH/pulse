/* eslint-disable @typescript-eslint/no-empty-object-type */
/**
 * This file is used to setup the unistyles default themes, settings etc.
 */

import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
  colors: {
    primary: '#4A90E2',
    secondary: '#50E3C2',
    background: '#FFFFFF',
    surface: '#F7F7F7',
    text: '#222222',
    mutedText: '#666666',
    border: '#E2E2E2',
  },
};

const darkTheme = {
  colors: {
    primary: '#6FA8DC',
    secondary: '#7AD1C2',
    background: '#1C1C1C',
    surface: '#2A2A2A',
    text: '#EAEAEA',
    mutedText: '#dadadaff',
    border: '#3A3A3A',
  },
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    initialTheme: 'dark',
  },
  themes: appThemes,
});
