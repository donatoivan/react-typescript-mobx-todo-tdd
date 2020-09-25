import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { stores, StoresProvider } from "./stores";

import { useStores } from "./hooks";

describe("useStores", () => {
  it("it return complete stores map", () => {
    const wrapper: React.FC = ({ children }) => {
      return <StoresProvider value={stores}> {children} </StoresProvider>;
    };

    const { result } = renderHook(() => useStores(), {
      wrapper,
    });

    expect(result.current).toStrictEqual(stores);
  });
});
