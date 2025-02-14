import { Outlet } from "react-router";
import styled from "styled-components";
import TopNavigation from "../components/TopNavigation";

const MainLayout = () => {
  return (
    <Main>
      <TopNavigation />
      <Outlet />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default MainLayout;
