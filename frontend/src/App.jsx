import styled, { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SuiClientProvider,
  useCurrentAccount,
  useSuiClientQuery,
  WalletProvider,
} from "@mysten/dapp-kit";
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
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networks} defaultNetwork="devnet">
        <WalletProvider>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <RootNavigation />
            {/* <Main>
              <ConnectButton />
              <ConnectedAccount />
            </Main> */}
          </ThemeProvider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

export default App;

function ConnectedAccount() {
  const account = useCurrentAccount();

  if (!account) {
    return <div>No account connected</div>;
  }

  return (
    <div>
      <div>Connected to {account.address}</div>;
      <OwnedObjects address={account.address} />
    </div>
  );
}

function OwnedObjects({ address }) {
  const { data } = useSuiClientQuery("getOwnedObjects", {
    owner: address,
  });
  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.data.map((object) => (
        <li key={object.data?.objectId}>
          <a
            href={`https://example-explorer.com/object/${object.data?.objectId}`}
          >
            {object.data?.objectId}
          </a>
        </li>
      ))}
    </ul>
  );
}
