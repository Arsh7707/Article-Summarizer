// import { configureStore } from "@reduxjs/toolkit";
// import {articleApi} from './article'

// export const store = configureStore({
//     reducer: {[articleApi.reducerPath]: articleApi.reducer}, // reducer takes a current state in a function and return a new state
//     middleware: (getDefaultMiddleware) => //middleware functions for request-respnse cycles to handle the functions, next functions etc
//     getDefaultMiddleware().
//     concat(articleApi.middleware)
// });

import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})