import React, { ReactElement, Suspense, lazy } from "react";
import { Router, Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "../layout/layout";
import history from "../utils/history";
import LinearProgress from "@mui/material/LinearProgress";


const Home = lazy(() => import("../views/home/App"));
const Location = lazy(() => import("../views/location/Location"));
const Detail = lazy(() => import("../views/detail/Detail"));

const IndexRouter: React.FC = (): ReactElement => {

  console.log('Router')
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
