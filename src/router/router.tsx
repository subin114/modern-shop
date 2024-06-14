import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Home from "../components/pages/Home/Home";
import NotFound from "../components/pages/NotFound/NotFound";
import All from "../components/pages/All/All";
import Fashion from "../components/pages/Fashion/Fashion";
import Jewelery from "../components/pages/Jewelery/Jewelery";
import Digital from "../components/pages/Digital/Digital";
import ProductDetail from "../components/pages/ProductDetail/ProductDetail";
import { Outlet } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all" element={<All />} />
      <Route path="/category">
        <Route index element={<Outlet />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/jewelery" element={<Jewelery />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default memo(Router);
