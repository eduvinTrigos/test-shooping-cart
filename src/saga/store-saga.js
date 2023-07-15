import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reduce-saga"; // Importa tu reducer personalizado
import rootSaga from "./conf-saga"; // Importa el archivo conf-saga.js

// Configure the Redux store with Redux Toolkit
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
