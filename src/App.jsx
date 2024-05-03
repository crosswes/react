// * Hooks
import { Outlet } from "react-router-dom";
import { memo } from "react";

// * Components
import Header from "./components/Header/Header";

// * Cached components
const HeaderMemo = memo(Header);

const App = () => {
  return (
    <>
      <HeaderMemo />
      <Outlet />
    </>
  );
};

export default App;
