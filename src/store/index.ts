import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer : {
        products: productsReducer,
        cart: cartReducer,
        user: userReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

