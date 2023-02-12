import React from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <div className="App">
      <div className="content">
        <Container>
          <Suspense fallback={"Loading..."}>
            <Header />

            <Outlet />
          </Suspense>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
