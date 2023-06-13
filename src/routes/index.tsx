import React, { ReactElement, Suspense, lazy } from "react";
import { Router, Route } from "react-router-dom";
import Layout from "../layout/layout";
import history from "../utils/history";

const Home = lazy(() => import("../views/home/App"));
const Location = lazy(() => import("../views/location/Location"));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <Layout>
      <Router history={history}>
        <Suspense fallback={<p>Loading...</p>}>
          <Route path="/" exact component={Home} />
          <Route path="/location" exact component={Location} />
        </Suspense>
      </Router>
    </Layout>
  );
};

export default IndexRouter;
