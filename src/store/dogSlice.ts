import { StateCreator } from "zustand"

export type DogSlice = {
    dogcount: number,
    increaseDogs: (by: number) => void,
    decreaseDogs: (by:number) => void,
    resetDogs: () => void
}

const intialState:Pick<DogSlice, 'dogcount'> =  {dogcount: 10}

export const dogSlice: StateCreator<DogSlice> = (set) => ({
    ...intialState,
    increaseDogs: (by) => set((state) => ({dogcount: state.dogcount + by })),
    decreaseDogs: (by) => set((state) => ({dogcount: state.dogcount - by })),
    resetDogs: () => set(() => ({dogcount: 0 })),
})

export default dogSlice