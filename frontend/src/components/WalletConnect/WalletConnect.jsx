import {
  useConnectWallet,
  useCurrentAccount,
  useDisconnectWallet,
  useAutoConnectWallet,
  useWallets,
} from "@mysten/dapp-kit";
import { Popover } from "radix-ui";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import Avatar from "../Avatar";

const WalletConnect = () => {
  const wallets = useWallets();
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();
  const { mutate: connect } = useConnectWallet();
  const [open, setOpen] = useState(false);

  const handleOnConnect = useCallback(
    (wallet) => {
      connect(
        { wallet },
        {
          onSuccess: () => {
            console.log("connected");
            setOpen(false);
          },
        }
      );
    },
    [connect]
  );

  const handleOnDisconnect = useCallback(() => {
    disconnect();
    setOpen(false);
  }, [disconnect]);

  const Wallets = useMemo(() => {
    return (
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.name}>
            <Button onClick={() => handleOnConnect(wallet)}>
              {wallet.name}
            </Button>
          </li>
        ))}
      </ul>
    );
  }, [handleOnConnect, wallets]);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        {currentAccount ? (
          <button>
            <Avatar />
          </button>
        ) : (
          <Button>Connect</Button>
        )}
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent sideOffset={5}>
          {currentAccount ? (
            <Button onClick={handleOnDisconnect}>Disconnect</Button>
          ) : (
            Wallets
          )}
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
};

const PopoverContent = styled(Popover.Content)``;

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.brand.main};
  padding: 6px 16px;
  border-radius: 99px;
  color: ${({ theme }) => theme.palette.negative.high};
`;

export default WalletConnect;
