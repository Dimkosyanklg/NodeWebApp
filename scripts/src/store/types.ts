import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

export type Operation<T> = ThunkAction<T, RootState, {}, AnyAction>;
export type AsyncOperation<T> = Operation<Promise<T>>;
