import {
  useConnectWallet,
  useCurrentAccount,
  useDisconnectWallet,
  useWallets,
} from "@mysten/dapp-kit";
import { Popover } from "radix-ui";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import { useNavigate } from "react-router";

const WalletConnect = () => {
  const wallets = useWallets();
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();
  const { mutate: connect } = useConnectWallet();
  const navigate = useNavigate();
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

  const handleRouting = useCallback(
    ({ route }) => {
      navigate(route);
      setOpen(false);
    },
    [navigate]
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
            <ul>
              <li>
                <Button onClick={() => handleRouting({ route: "/account" })}>
                  Account
                </Button>
              </li>
              <li>
                <Button onClick={handleOnDisconnect}>Disconnect</Button>
              </li>
            </ul>
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
