import styled from "styled-components";
import WalletConnect from "../WalletConnect";
import { Link } from "react-router";

const TopNavigation = () => {
  return (
    <Nav>
      <Toolbar>
        <LogoWrapper>
          <Link to="/">LOGO</Link>
        </LogoWrapper>
        <MenuWrapper></MenuWrapper>
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

const LogoWrapper = styled.div`
  justify-self: flex-start;
`;

const MenuWrapper = styled.div`
  flex: 1;
`;

export default TopNavigation;
