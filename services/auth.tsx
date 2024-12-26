import { createContext, PropsWithChildren } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }: PropsWithChildren) {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
