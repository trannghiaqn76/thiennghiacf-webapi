import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { AboutUsContainer } from "./containers";
const _HomeView = styled.div``;

interface IProfilePageProps {}

export const AboutUsManagement = (
  props: React.PropsWithChildren<IProfilePageProps>
) => {
  const {} = props;
  return (
    <_HomeView>
      <Helmet>
        <title>Về chúng tôi</title>
      </Helmet>
      {/* <AboutUsContainer /> */}
    </_HomeView>
  );
};
