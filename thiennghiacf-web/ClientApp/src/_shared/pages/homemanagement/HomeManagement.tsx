import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { HomeContainer } from "./containers";
const _HomeView = styled.div``;

interface IProfilePageProps {}

export const HomeManagement = (
  props: React.PropsWithChildren<IProfilePageProps>
) => {
  const {} = props;
  return (
    <_HomeView>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <HomeContainer />
    </_HomeView>
  );
};
