import { useRouter } from "next/navigation";

import { useIsAuthenticated } from "@/api/auth/queries";

import { useModalState } from "./use-modal-state";

export function useCatchRedirect(to = "/") {
  const isAuthenticated = useIsAuthenticated();
  const { loginOpen } = useModalState("login");
  const { replace } = useRouter();

  return () => {
    if (isAuthenticated) {
      return replace(to);
    }

    loginOpen();
  };
}
