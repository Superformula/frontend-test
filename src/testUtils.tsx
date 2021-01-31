import React from "react";
import { render, RenderResult, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

interface IProps {
  children: React.ReactNode | null;
}

function Wrapper({ children }: IProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult {
  return render(ui, { wrapper: Wrapper as any, ...options });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
