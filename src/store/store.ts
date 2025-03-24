import {configureStore} from '@reduxjs/toolkit';
import browseUserSlice from './store.slice';

export const appStore = configureStore({
    reducer: {
        userReducer: browseUserSlice,
        
    }
})
export type RootState = ReturnType<typeof appStore.getState>