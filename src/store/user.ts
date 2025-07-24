import { create } from 'zustand'

type User = {
  username: string
  token: string
}

type UserStore = {
  user: User | null
  setUser: (user: User) => void
  login: (user: User) => void
  logout: () => void
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

export default useUserStore