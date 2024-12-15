import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import userReducer from '../store/state/reduserSlises/userSlice'
import usersReducer from '../store/state/reduserSlises/usersSlice'
import categoryReducer from '../store/state/reduserSlises/categorySlice'
import manufacturerReducer from '../store/state/reduserSlises/manufacturerSlice';
import productReducer from '../store/state/reduserSlises/productSlice';
import appSettingSlice from '../store/state/reduserSlises/appSettingSlice';
import roleReducer from '../store/state/reduserSlises/roleSlice'
import cartItemReducer from '../store/state/reduserSlises/cartItemSlice';
import filtersReducer from '../store/state/reduserSlises/filtersSlice';

export const rootReducer = combineReducers({
    user: userReducer,
    role: roleReducer,
    category: categoryReducer,
    manufacturer: manufacturerReducer,
    product: productReducer,
    appSettings: appSettingSlice,
    users: usersReducer,
    filters: filtersReducer,
    cartItem : cartItemReducer
  });

  export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})