import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import ROUTES from "./utils/routes";
import DashboardLayout from "./layout/DashboardLayout";
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Lisitngs = lazy(()=>import("./pages/Listing"))
const Users = lazy(()=>import("./pages/Users"))
const Notification = lazy(()=>import("./pages/Notification"))
const ListingView = lazy(()=>import("./pages/ListingView"))
function Fallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index path={ROUTES.DASHBOARD} element={<HomePage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.USERS.USERS_DATA} element={<Users />} />
        <Route path={ROUTES.LISTING.LISTING_DATA} element={<Lisitngs />} >
          <Route path={`${ROUTES.LISTING.LISTING_VIEW}/:id`} element={<ListingView/>}/>
        </Route>
        <Route path={ROUTES.NOTIFICATION} element={<Notification />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary FallbackComponent={Fallback}>
          <AppRouter />
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};

export default App;
