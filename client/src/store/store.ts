import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {spimexCompaniesCountSlice} from "./slices/SpimexCompaniesCountSlice";

const rootReducer = combineReducers({
    spimexCompaniesCount: spimexCompaniesCountSlice,
});

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;