import { useMutation } from "@tanstack/react-query";

import { authService } from "../../services/auth.service";
import { useAuthStore } from "../../store";

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      login(
        data.user,
        data.accessToken,
        data.refreshToken
      );
    },
  });
};

export default useLogin;