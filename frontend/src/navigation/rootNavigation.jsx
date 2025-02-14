import { Routes, Route } from "react-router";
import HomeScreen from "../screens/Home";
import MainLayout from "../layout/MainLayout";

export const RootNavigation = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeScreen />} />
      </Route>
    </Routes>
  );
};
