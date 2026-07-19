import { create } from "zustand";

interface AppState {
  isLoading: boolean;
  isInitialized: boolean;
  sidebarCollapsed: boolean;

  setLoading: (loading: boolean) => void;
  setInitialized: (initialized: boolean) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: false,

  isInitialized: false,

  sidebarCollapsed: false,

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),

  setInitialized: (initialized) =>
    set({
      isInitialized: initialized,
    }),

  toggleSidebar: () =>
    set((state) => ({
      sidebarCollapsed: !state.sidebarCollapsed,
    })),

  setSidebarCollapsed: (collapsed) =>
    set({
      sidebarCollapsed: collapsed,
    }),
}));