import { Routes, Route } from "react-router";
import HomeScreen from "../screens/Home";
import MainLayout from "../layout/MainLayout";
import AccountScreen from "../screens/Account";

export const RootNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="account" element={<AccountScreen />} />
      </Route>
    </Routes>
  );
};
