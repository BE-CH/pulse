# React Native Starter Template by Bech Solutions ApS

This starter template provides a solid foundation for building high-quality, performant, and maintainable React Native applications. It is meticulously crafted and maintained by [Bech Solutions ApS](https://bechsolutions.dk/).

## Philosophy

Our core philosophy is centered around **minimalism** and a **low footprint**. We have carefully selected dependencies and packages that are lightweight and efficient. Furthermore, we prioritize the use of official Expo packages to ensure a stable and easily maintainable foundation for all projects built upon this template.

## Key Features

- **Minimalistic Approach:** A curated selection of packages to keep your app lean and fast.
- **Expo-Centric:** Leverages the power and stability of the Expo ecosystem.
- **Performance-Oriented:** Includes libraries chosen for their speed and efficiency.
- **Modern Tooling:** Utilizes the latest in React Native development tools and practices.

## Battle-Tested & Continuously Improved

This isn't just a template; it's a living project. It is **continuously updated and battle-tested** in real-world production apps that we build for our clients. These applications serve a combined total of over **10000+ active users**, ensuring that the template's architecture and included packages are reliable, scalable, and ready for production.

## Packages and Dependencies

This template includes a carefully selected set of packages to provide a robust starting point for your application. For the specific versions included, please refer to the `package.json` file.

### Core Frameworks & Tooling

| Library          | Description                                                              | Link                                                                                         |
| :--------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| **Bun**          | A fast, all-in-one JavaScript runtime and package manager.               | [docs.expo.dev/guides/using-bun/](https://docs.expo.dev/guides/using-bun/)                   |
| **React Native** | The fundamental framework for building native apps with React.           | [reactnative.dev](https://reactnative.dev)                                                   |
| **Expo SDK**     | A powerful set of tools and services built around React Native.          | [expo.dev/changelog](https://expo.dev/changelog)                                             |
| **TypeScript**   | A strongly typed programming language that builds on JavaScript.         |                                                                                              |
| **Expo Doctor**  | A tool to help check for common errors and project configuration issues. | [docs.expo.dev/develop/tools/#expo-doctor](https://docs.expo.dev/develop/tools/#expo-doctor) |

### UI & Navigation

| Library                              | Description                                                         | Link                                                                                                                         |
| :----------------------------------- | :------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| **Expo Router**                      | A file-based router for React Native and web applications.          | [docs.expo.dev/router/introduction/](https://docs.expo.dev/router/introduction/)                                             |
| **LegendList**                       | A faster and more performant replacement for the standard FlatList. | [legendapp.com/open-source/list/](https://legendapp.com/open-source/list/api/gettingstarted/)                                |
| **react-native-gesture-handler**     | Provides more control and flexibility over gestures in your app.    | [docs.expo.dev/versions/latest/sdk/gesture-handler/](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)             |
| **react-native-reanimated**          | A library for creating smooth, powerful, and performant animations. | [docs.expo.dev/versions/latest/sdk/reanimated/](https://docs.expo.dev/versions/latest/sdk/reanimated/)                       |
| **react-native-safe-area-context**   | A tool to handle the safe area insets on different devices.         | [docs.expo.dev/versions/latest/sdk/safe-area-context/](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)         |
| **react-native-screens**             | Provides native navigation primitives for optimal screen behavior.  | [docs.expo.dev/versions/latest/sdk/screens/](https://docs.expo.dev/versions/latest/sdk/screens/)                             |
| **react-native-keyboard-controller** | Offers enhanced control and handling of the on-screen keyboard.     | [kirillzyusko.github.io/react-native-keyboard-controller/](https://kirillzyusko.github.io/react-native-keyboard-controller/) |
| **UniStyles**                        | A utility for creating better and more maintainable stylesheets.    | [www.unistyl.es](https://www.unistyl.es)                                                                                     |

### State Management & Data Fetching

| Library                 | Description                                                 | Link                                                                                   |
| :---------------------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Zustand**             | A small, fast, and scalable state-management solution.      | [github.com/pmndrs/zustand](https://github.com/pmndrs/zustand)                         |
| **openapi-fetch / swr** | A lightweight solution for fetching data from REST APIs.    | [openapi-ts.dev/openapi-fetch/](https://openapi-ts.dev/openapi-fetch/)                 |
| **react-native-mmkv**   | A fast replacement for AsyncStorage for persistent storage. | [github.com/mrousavy/react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) |

### Expo APIs & Utilities

| Library                  | Description                                                        | Link                                                                                                               |
| :----------------------- | :----------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| **date-fns**             | A modern JavaScript date utility library.                          | [github.com/date-fns/date-fns](https://github.com/date-fns/date-fns)                                               |
| **Expo Assets**          | Manage and import assets with appropriate scaling.                 | [docs.expo.dev/versions/latest/sdk/asset/](https://docs.expo.dev/versions/latest/sdk/asset/)                       |
| **Expo BackgroundTask**  | Run tasks in the background when the app is not in the foreground. | [docs.expo.dev/versions/latest/sdk/background-task/](https://docs.expo.dev/versions/latest/sdk/background-task/)   |
| **Expo BuildProperties** | Configure native build properties during the prebuild phase.       | [docs.expo.dev/versions/latest/sdk/build-properties/](https://docs.expo.dev/versions/latest/sdk/build-properties/) |
| **Expo Constants**       | Access system and app-related constants.                           | [docs.expo.dev/versions/latest/sdk/constants/](https://docs.expo.dev/versions/latest/sdk/constants/)               |
| **Expo Device**          | Get information about the physical device.                         | [docs.expo.dev/versions/latest/sdk/device/](https://docs.expo.dev/versions/latest/sdk/device/)                     |
| **Expo Fonts**           | Load and use custom fonts in your application.                     | [docs.expo.dev/versions/latest/sdk/font/](https://docs.expo.dev/versions/latest/sdk/font/)                         |
| **Expo Haptics**         | Provide haptic feedback for user interactions.                     | [docs.expo.dev/versions/latest/sdk/haptics/](https://docs.expo.dev/versions/latest/sdk/haptics/)                   |
| **Expo Image**           | A highly optimized image component for React Native.               | [docs.expo.dev/versions/latest/sdk/image/](https://docs.expo.dev/versions/latest/sdk/image/)                       |
| **Expo Linking**         | Create deep links and interact with other applications.            | [docs.expo.dev/versions/latest/sdk/linking/](https://docs.expo.dev/versions/latest/sdk/linking/)                   |
| **Expo Localization**    | Implement internationalization and support multiple languages.     | [docs.expo.dev/versions/latest/sdk/localization/](https://docs.expo.dev/versions/latest/sdk/localization/)         |
| **Expo Notifications**   | Schedule and manage local and push notifications.                  | [docs.expo.dev/versions/latest/sdk/notifications/](https://docs.expo.dev/versions/latest/sdk/notifications/)       |
| **Expo SplashScreen**    | Control the splash screen for a smooth app loading experience.     | [docs.expo.dev/versions/latest/sdk/splash-screen/](https://docs.expo.dev/versions/latest/sdk/splash-screen/)       |
| **Expo Status Bar**      | Customize the appearance and behavior of the status bar.           | [docs.expo.dev/versions/latest/sdk/status-bar/](https://docs.expo.dev/versions/latest/sdk/status-bar/)             |

## Recommended Add-on Packages

The following packages are not included in the base template but are highly recommended for extending your app's functionality when needed.

| Library                        | Description                                               | Link                                                                                                         |
| :----------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **Expo ImagePicker**           | Used to pick local images from the device.                | [docs.expo.dev/versions/latest/sdk/imagepicker/](https://docs.expo.dev/versions/latest/sdk/imagepicker/)     |
| **Expo Location**              | Used to get location info from the device.                | [docs.expo.dev/versions/latest/sdk/location/](https://docs.expo.dev/versions/latest/sdk/location/)           |
| **Expo Maps**                  | Used to show maps in the app.                             | [docs.expo.dev/versions/latest/sdk/maps/](https://docs.expo.dev/versions/latest/sdk/maps/)                   |
| **Expo MediaLibrary**          | Used to pick and save images and videos from the device.  | [docs.expo.dev/versions/latest/sdk/media-library/](https://docs.expo.dev/versions/latest/sdk/media-library/) |
| **Expo StoreReview**           | A utility to prompt for Play Store and App Store reviews. | [docs.expo.dev/versions/latest/sdk/storereview/](https://docs.expo.dev/versions/latest/sdk/storereview/)     |
| **Expo Video**                 | Provides video playback functionality in your app.        | [docs.expo.dev/versions/latest/sdk/video/](https://docs.expo.dev/versions/latest/sdk/video/)                 |
| **react-native-pager-view**    | A component for creating carousel-like views.             | [docs.expo.dev/versions/latest/sdk/view-pager/](https://docs.expo.dev/versions/latest/sdk/view-pager/)       |
| **Zeego**                      | A library to help create native dropdown menus.           | [zeego.dev](https://zeego.dev/)                                                                              |
| **react-native-vision-camera** | Enables advanced camera usage and functionality.          | [github.com/mrousavy/react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera)     |

## Need Professional Help?

While this template is a great starting point, building a full-featured, production-ready application can be a complex undertaking. If you need expert assistance with your React Native project—from architecture and development to deployment and maintenance—our consultancy firm is here to help.

Contact **Bech Solutions ApS** to learn how we can bring your app idea to life: [https://bechsolutions.dk/](https://bechsolutions.dk/)
