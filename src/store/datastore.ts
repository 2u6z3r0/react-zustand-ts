import { create } from "zustand"


interface CatsState {
    cats: number
    increase: (by: number) => void
    resetCount: () => void
}

const useCatsStore = create<CatsState>()((set) => ({
    cats: 0,
    increase: (by) => set((state) => ({cats: state.cats + by})),
    resetCount: () => set(() => ({cats: 0}))
}))

export default useCatsStore;