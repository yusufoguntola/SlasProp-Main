import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/use-auth";

interface ProtectedRouteProps  extends PropsWithChildren {}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}
