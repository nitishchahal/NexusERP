import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./index.ts";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <BrowserRouter>
      <AppProvider>{children}</AppProvider>
    </BrowserRouter>
  );
};

export default AppProviders;