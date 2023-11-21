import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { authApi } from "./query/api/auth";
import { basicQueryApi } from "./query/api/basicQuery";
import { advanceFilterApi } from "./query/api/advanceFilter";


const middleware = [
  authApi.middleware,
  basicQueryApi.middleware,
  advanceFilterApi.middleware,
]

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;