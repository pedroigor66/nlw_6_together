import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const AuthenticationContext = useContext(AuthContext);

  return AuthenticationContext;
}
