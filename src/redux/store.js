import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import {
  PURGE,
  REGISTER,
  PERSIST,
  PAUSE,
  REHYDRATE,
  FLUSH,
} from "redux-persist/es/constants";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  //  fixed persist error ("A non-serializable value...")
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
