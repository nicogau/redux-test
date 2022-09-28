
// src/app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import translateSlice from './features/translate/translateSlice'
const rootReducer = combineReducers({
    counter: counterSlice,
    translate: translateSlice
})

export type RootState = ReturnType<typeof rootReducer>

export  default rootReducer
