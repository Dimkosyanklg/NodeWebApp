import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import user from "./user";

const store = configureStore({
    reducer: {
        user,
    },
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export { store };
