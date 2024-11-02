import { useStorageState } from "@/hooks/use-storage-state"
import { createContext, PropsWithChildren, useContext } from "react"

const AuthContext = createContext<{
  signIn: () => void
  signOut: () => void
  session?: string | null
  isLoading: boolean
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
})

export const useSession = () => {
  const value = useContext(AuthContext)
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />")
    }
  }

  return value
}

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useStorageState("session")

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession("xxx")
        },
        signOut: () => {
          setSession(null)
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
