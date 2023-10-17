import React from "react";
import styled from "styled-components";
import { DefaultLayoutHeader } from "./DefaultLayoutHeader";
import { Outlet } from "react-router-dom";

const _DefaultLayout = styled.div`
  height: 100vh;
  overflow: hidden;
  background: "#f0f2f5";
  font-family: "inherit";
  //////////////////
  /* màn hình tối thiểu 991px trở lên*/
  @media (min-width: 991px) {
  }
  /* màn hình tối đa 991px trở xuống*/
  @media (max-width: 991px) {
  }
`;

interface IDefaultLayoutProps {
  main?: React.ReactNode;
}

export const DefaultLayout = (
  props: React.PropsWithChildren<IDefaultLayoutProps>
) => {
  return (
    <_DefaultLayout>
      <DefaultLayoutHeader />
      <div style={{paddingLeft:5,paddingRight:5}}>
          {<Outlet />}
          {props?.main}
      </div>
    </_DefaultLayout>
  );
};
