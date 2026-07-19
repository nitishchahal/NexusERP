import { useMutation } from "@tanstack/react-query";

import { authService } from "../../services/auth.service.tsx";

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: authService.refreshToken,
  });
};