"use client";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={store}>{children}</Provider>;
}
