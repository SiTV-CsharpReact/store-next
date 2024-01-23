import create from 'zustand';

interface StoreState {
    fix: boolean;
    setFix: (value: boolean) => void;
    scrollY:number;
    setScrollY: (value: number) => void;
    maxScrollY: number;
}

const useStore = create<StoreState>((set) => ({
    fix: false,
    scrollY:0,
    maxScrollY:document.documentElement.scrollHeight+70,
    setFix: (value) => set({ fix: value }),
    setScrollY: (value) => set({ scrollY: value }),
}));

export default useStore;