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
  mainnet: { url: getFullnodeUrl("mainnet") },
};

function App() {
  return (
    <BrowserRouter>
      <div>SUI</div>
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networks} defaultNetwork="devnet">
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
