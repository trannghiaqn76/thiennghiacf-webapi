import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import {
  DefaultLayout,
  HomeManagement,
  CommunityManagement,
  AboutUsManagement,
} from "./_shared";
import Page404 from "./_shared/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: (
      <DefaultLayout
        main={
          <>
            <Page404 />
          </>
        }
      />
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <HomeManagement />
          </>
        ),
      },
      {
        path: "/dang-nhap",
        element: <>Login</>,
      },
      {
        path: "/ve-chung-toi",
        element: <><AboutUsManagement/></>,
      },
      {
        path: "/cong-dong",
        element: <><CommunityManagement/></>,
        errorElement: (
          <DefaultLayout
            main={
              <>
                <Page404 />
              </>
            }
          />
        ),
        children: [],
      },
    ],
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
