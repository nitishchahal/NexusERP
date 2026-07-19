import { useMutation } from "@tanstack/react-query";

import { authService } from "../../services/auth.service.tsx";
import { useAuthStore } from "../../store/index.ts";

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: authService.logout,

    onSuccess: () => {
      logout();
    },
  });
};