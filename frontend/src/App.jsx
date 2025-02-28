import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import GlobalStyles from "./styles/GlobalStyles";

import { lightTheme } from "./styles/theme";
import { RootNavigation } from "./navigation/rootNavigation";

const queryClient = new QueryClient();

const networks = {
  devnet: { url: getFullnodeUrl("devnet") },
  testnet: { url: getFullnodeUrl("testnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
};

let zoo = "Hello SUI"

function App() {
  return (
    <BrowserRouter>
      <div>{zoo}</div>
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networks} defaultNetwork="testnet">
          <WalletProvider autoConnect={true}>
            <ThemeProvider theme={lightTheme}>
              <GlobalStyles />
              <RootNavigation />
            </ThemeProvider>
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
