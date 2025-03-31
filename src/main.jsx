// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import './Payment_Component/payment.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider từ react-redux
import store from "./ReduxToolkit/store.jsx"; // Import store Redux
import "./index.css";
import "./Payment_Component/payment.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Bọc App trong Provider */}
      <App />
    </Provider>
  </StrictMode>
);
