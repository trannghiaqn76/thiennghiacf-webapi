import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import { ProductComponent, PostComponent, BannerComponent } from "../component";

interface IHomeProps {}
const _Home = styled.div`
  /* Scroll bar */
  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;

export const HomeContainer = (props: React.PropsWithChildren<IHomeProps>) => {
  const {} = props;
  return (
    <_Home>
      <Row gutter={16}>
        <Col span={12}>
          <PostComponent />
        </Col>
        <Col span={12}>
          <BannerComponent/>
          <ProductComponent />
        </Col>
      </Row>
    </_Home>
  );
};
