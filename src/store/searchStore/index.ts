import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSearchStore = create<{
  search: string;
  setSearch: (search: string) => void;
}>()(
  persist(
    (set) => ({
      search: '',
      setSearch: (search) => set({ search }),
    }),
    { name: 'search' }
  )
);

export default useSearchStore;
