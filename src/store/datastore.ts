import { create } from "zustand"
import catSlice, { CatSlice } from "./catSlice"
import dogSlice, { DogSlice } from "./dogSlice"
import { persist } from "zustand/middleware"


interface CatsState {
    cats: number
    increase: (by: number) => void
    resetCount: () => void
}

export const useCatsStore = create<CatsState>()((set) => ({
    cats: 0,
    increase: (by) => set((state) => ({cats: state.cats + by})),
    resetCount: () => set(() => ({cats: 0}))
}))

export const useBoundStore = create<CatSlice & DogSlice>()(persist((...a) => ({
    ...catSlice(...a),
    ...dogSlice(...a)
}), { name: 'boundstorage', }))

export default useCatsStore;