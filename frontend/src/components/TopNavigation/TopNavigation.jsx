import styled from "styled-components";
import WalletConnect from "../WalletConnect";

const TopNavigation = () => {
  return (
    <Nav>
      <Toolbar>
        <WalletConnect />
      </Toolbar>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex: 1;
  padding: 16px 24px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export default TopNavigation;
