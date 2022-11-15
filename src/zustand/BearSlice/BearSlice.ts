import { StateCreator } from 'zustand'
import { BearState } from '../../interfaces'

export const createBearSlice: StateCreator<BearState> = (set) => ({
    bears: 0,
    increase: (by) => set(
        (state) => ({ bears: state.bears + by }),
        false,
        "BearSlice/increaseCount"
        ),
})
