import { StateCreator } from "zustand"

export type CatSlice = {
    catcount: number,
    increaseCats: (by: number) => void,
    decreaseCats: (by:number) => void,
    resetCats: () => void
}

export const catSlice: StateCreator<CatSlice> = (set) => ({
    catcount: 0,
    increaseCats: (by) => set((state) => ({catcount: state.catcount + by })),
    decreaseCats: (by) => set((state) => ({catcount: state.catcount - by })),
    resetCats: () => set(() => ({catcount: 0 })),
})

export default catSlice