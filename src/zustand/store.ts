import create from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createCartSlice } from './CartSlice/CartSlice';
import { createAuthSlice } from './AuthSlice/AuthSlice';
import { createBearSlice } from './BearSlice/BearSlice';

import { Store} from '../interfaces';

const persistOptions = {
    name: 'bound-store',
    getStorage: () =>  AsyncStorage,
    partialize: (state) => ({
        "logged":state.logged,
        "cart":state.cart,
        //add key name with state if you need to persist it.
    }) 
}

const devtoolOptions = {
    enabled:true, //If you wish to disable devtools (on production for instance). set false
    name:"MyStore",
    anonymousActionType:"Zustand/devtools" //practise to action name with each and every set actions
}

const store = (...a) => ({
    ...createCartSlice(...a),
    ...createAuthSlice(...a),
    ...createBearSlice(...a),
})

export const useBoundStore = create<Store>()(
    devtools(persist(store, persistOptions), devtoolOptions)
)
