import { Route, Routes } from "react-router-dom";
import Layout from "../common/Layout";
import Home from "../Home";
import FriendLists from "../FriendLists";
import Profile from "../Profile";
import Settings from "../Settings";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="friend-lists" element={<FriendLists />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AuthenticatedRoutes;
