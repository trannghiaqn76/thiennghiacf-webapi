import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { CommunityContainer } from "./containers";
const _CommunityPage = styled.div``;

interface ICommunityPageProps {}

export const CommunityManagement = (
  props: React.PropsWithChildren<ICommunityPageProps>
) => {
  const {} = props;
  return (
    <_CommunityPage>
      <Helmet>
        <title>Cộng đồng</title>
      </Helmet>
      <CommunityContainer />
    </_CommunityPage>
  );
};
