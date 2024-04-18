import { AuthContext } from "provider/auth-provider/AuthProvider";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext)