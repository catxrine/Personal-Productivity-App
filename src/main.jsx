import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.tsx";
import App from "./App.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
