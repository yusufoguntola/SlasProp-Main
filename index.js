import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.js";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import store from './src/store/store.js';
// import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  //   <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
  // </Provider>, //
);
