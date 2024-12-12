import { Route, Routes } from "react-router-dom";
import Layout from "../common/Layout";
import Home from "../Home";
import FriendLists from "../FriendLists";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="friend-lists" element={<FriendLists />} />
      </Route>
    </Routes>
  );
};

export default AuthenticatedRoutes;
