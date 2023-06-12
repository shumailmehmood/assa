import React, { ReactElement, Suspense, lazy } from "react";
import { Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../assets/theme";
import history from "../utils/history";

const Home = lazy(() => import("../views/home/App"));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Suspense fallback={<p>Loading...</p>}>

          <Route path="/" component={Home} />

        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default IndexRouter;
