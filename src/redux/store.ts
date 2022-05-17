import { configureStore } from '@reduxjs/toolkit';

import usernameReducer from './reducers/usernameSlice';
import loadingReducer from './reducers/loadingSlice';
import currSystemReducer from './reducers/currSystemSlice';

export const store = configureStore({
    reducer: {
        username: usernameReducer,
        loading: loadingReducer,
        currSystem: currSystemReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch