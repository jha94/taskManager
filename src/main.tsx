import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TaskProvider } from "./context/TaskContext.tsx";
import ErrorBoundary from "./ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ErrorBoundary>
  </StrictMode>,
);
