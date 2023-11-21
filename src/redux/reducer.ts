import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth";
import { authApi } from "./query/api/auth";
import { basicQueryApi } from "./query/api/basicQuery";
import { advanceFilterApi } from "./query/api/advanceFilter";

export const reducer = combineReducers({
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [basicQueryApi.reducerPath]: basicQueryApi.reducer,
  [advanceFilterApi.reducerPath]: advanceFilterApi.reducer,
});