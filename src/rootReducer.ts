
// src/app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
const rootReducer = combineReducers({
    counter: counterSlice
})

export type RootState = ReturnType<typeof rootReducer>

export  default rootReducer
