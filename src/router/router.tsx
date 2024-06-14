import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Home from "../components/pages/Home/Home";

import NotFound from "../components/pages/NotFound/NotFound";
import All from "../components/pages/All/All";
import Fashion from "../components/pages/Fashion/Fashion";
import Jewelry from "../components/pages/Jewelry/Jewelry";
import Digital from "../components/pages/Digital/Digital";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/all" element={<All />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/jewelry" element={<Jewelry />} />
      <Route path="/digital" element={<Digital />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default memo(Router);
