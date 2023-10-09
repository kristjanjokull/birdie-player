import React from "react";
import type { GlobalProvider } from "@ladle/react";
import "../src/assets/styles/styles.css";

export const Provider: GlobalProvider = ({ children }) => <>{children}</>;
