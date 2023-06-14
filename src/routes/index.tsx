import React, { ReactElement, Suspense, lazy } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "../layout/layout";
import LinearProgress from "@mui/material/LinearProgress";


const Home = lazy(() => import("../views/home/App"));
const Location = lazy(() => import("../views/location/Location"));
const Detail = lazy(() => import("../views/detail/Detail"));

const IndexRouter: React.FC = (): ReactElement => {
  return (

    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LinearProgress />}>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>

  );
};

export default IndexRouter;
