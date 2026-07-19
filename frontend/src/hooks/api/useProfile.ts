import { useQuery } from "@tanstack/react-query";

import { authService } from "../../services/auth.service.tsx";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],

    queryFn: authService.getProfile,
  });
};