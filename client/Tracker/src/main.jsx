import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const pk=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!pk){
  throw new Error("Misisng publishable key of clerk");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={pk}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
