import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./Reset.css";
import App from "./App";
import { store, persitor } from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading="null" persistor={persitor}>
            <App />
        </PersistGate>
    </Provider>, 
    document.querySelector("#root")
);