import { create } from "zustand";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  theme: ThemeMode;

  setTheme: (theme: ThemeMode) => void;

  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "system",

  setTheme: (theme) =>
    set({
      theme,
    }),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),
}));