import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";

const Homepage = lazy(() => import("./pages/Home/Home"));
const Recommendation = lazy(() =>
  import("./pages/Recommendation/Recommendation")
);
const Registration = lazy(() => import("./pages/Registration/Registration"));
const MyCollection = lazy(() => import("./pages/MyCollection/MyCollection"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="recommendation" element={<Recommendation />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="collection" element={<MyCollection />} />
      </Route>
    </Routes>
  );
}

export default App;
