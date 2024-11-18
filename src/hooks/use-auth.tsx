"use client";

import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { useLocalStorage } from "./use-local-storage";

interface AuthContextType {
  user: any;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage("user", null);
  const { push } = useRouter();

  const login = async (data: any) => {
    setUser(data);
    push("/welcome");
  };

  const logout = () => {
    setUser(null);
    push("/");
  };

  const value = useMemo(() => {
    return {
      user,
      login,
      logout,
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
