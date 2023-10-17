import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
interface IAboutUsContainerProps {}
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

export const AboutUsContainer = (
  props: React.PropsWithChildren<IAboutUsContainerProps>
) => {
  const {} = props;
  return (
    <_Home>
      <Row gutter={16}>
        <Col span={8}>Giới thiệu 1 </Col>
        <Col span={8}>Giới thiệu 2</Col>
        <Col span={8}>Giới thiệu 3</Col>
      </Row>
    </_Home>
  );
};
