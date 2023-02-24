import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initalState,
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
