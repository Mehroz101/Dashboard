import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import ROUTES from "./utils/routes";
import DashboardLayout from "./layout/DashboardLayout";
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Lisitngs = lazy(() => import("./pages/Listing"));
const Users = lazy(() => import("./pages/Users"));
const Reservation = lazy(() => import("./pages/Reservation"));
const ListingView = lazy(() => import("./pages/ListingView"));
const Earning = lazy(() => import("./pages/Earning"));
const Setting = lazy(() => import("./pages/Setting"));
const Notifications = lazy(() => import("./pages/Notifications"));
function Fallback({ error }) {
  const regex = /\((.*?):\d+:\d+\)/;

  const match = error.stack.match(regex);

  if (match) {
    const filePath = match[1]; 
    console.log("File path:", filePath); // Output: http://localhost:5173/src/App.jsx?t=1732289155098

    // If you want just the file name
    var fileName = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.indexOf("?")
    );
    // Output: App.jsx
  } else {
    console.log("No file path found in the error message.");
  }
  console.log(error.file);

  return (
    <div
      role="alert"
      className="bg-red-800 flex flex-column w-full h-screen justify-content-center align-items-center"
    >
      <p className="text-white text-5xl text-600">Something went wrong:</p>
      <pre
        style={{ color: "yellow", backgroundColor: "green", padding: "5px" }}
      >
        {error.message}
      </pre>
      <pre
        style={{ color: "yellow", backgroundColor: "green", padding: "5px" }}
      >
        File: {fileName}
      </pre>
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
        <Route path={ROUTES.LISTING.LISTING_DATA} element={<Lisitngs />}>
          <Route
            path={`${ROUTES.LISTING.LISTING_VIEW}/:id`}
            element={<ListingView />}
          />
        </Route>
        <Route path={ROUTES.RESERVATION} element={<Reservation />} />
        <Route path={ROUTES.NOTIFICATION} element={<Notifications />} />
        <Route path={ROUTES.EARNING} element={<Earning />} />
        <Route path={ROUTES.SETTINGS} element={<Setting />} />
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
