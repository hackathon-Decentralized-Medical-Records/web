"use client";

import React, { createContext, useContext, useState } from "react";
import { useTheme } from "next-themes";
import { darkTheme, getDefaultConfig, lightTheme, midnightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "f3c60461cac8ff991163fc2e5e4c97ce",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export const CurrentUserContext = createContext<Record<string, any>>({});

export function Providers({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<Record<string, any>>({});

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            locale="en"
            theme={{
              lightMode: lightTheme(),
              darkMode: darkTheme({
                accentColor: "#c41f45",
              }),
            }}
          >
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </CurrentUserContext.Provider>
  );
}
