import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'PULSE - React Native Starter',
  slug: 'pulse',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'pulse',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.bechsolutionsaps.pulse',
  },
  android: {
    allowBackup: false, // Disable backup beacuse it can cause problem with firebase notifications.
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
    package: 'com.bechsolutionsaps.pulse',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 35,
          targetSdkVersion: 35,
          buildToolsVersion: '35.0.0',
        },
        ios: {
          deploymentTarget: '16.1',
        },
      },
    ],
    'expo-router',
    'expo-localization',
    [
      'expo-asset',
      {
        assets: ['./assets/images'],
      },
    ],
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    ],
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/Lato_400Regular.ttf',
          './assets/fonts/Lato_400Regular_Italic.ttf',
          './assets/fonts/Lato_700Bold.ttf',
          './assets/fonts/Lato_700Bold_Italic.ttf',
        ],
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
