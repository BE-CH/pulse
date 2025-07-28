import { create } from 'zustand';

/**
 * The interface for the global app store.
 */
interface AppStore {
  /**
   * Indicates that the app is ready and all pre-loaded resources have been loaded.
   */
  appIsReady: boolean;
  /**
   * Set the appIsReady property to indicate that all pre-loaded resources have been loaded.
   * @param value The state of the appIsReady property
   */
  setAppIsReady: (value: boolean) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  appIsReady: false,
  setAppIsReady: (value: boolean) => set(() => ({ appIsReady: value })),
}));
