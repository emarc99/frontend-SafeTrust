import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthenticationGlobalStore {
  token: string | null;
  address: string | null;
  setAuth: (token: string, address: string) => void;
  setAddress: (address: string) => void;
  clearAuth: () => void;
}

export const useGlobalAuthenticationStore = create<AuthenticationGlobalStore>()(
  persist(
    (set) => ({
      token: null,
      address: null,

      setAuth: (token, address) => set({ token, address }),

      setAddress: (address) => set({ address }),

      clearAuth: () => set({ token: null, address: null }),
    }),
    {
      name: 'safetrust-auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);