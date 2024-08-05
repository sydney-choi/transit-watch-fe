import { create } from 'zustand';

interface CollapseStore {
  isOpen: boolean;
  setCollapse: () => void;
}

export const useCollapseStore = create<CollapseStore>((set) => ({
  isOpen: true,
  setCollapse: () => set((state) => ({ isOpen: !state.isOpen })),
}));
