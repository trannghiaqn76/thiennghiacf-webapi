import { Card, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GETBANNER } from "../../store/actions";
import { info } from "../../../../../root/axios/config";

interface IPostProps {}
const _Post = styled.div`
  padding: 10px;
  margin-top: 5px;
  height: calc(100vh - 60px);
  overflow-x: hidden;
  overflow-y: auto;
  //////////////////
  /* màn hình tối thiểu 991px trở lên*/
  @media (min-width: 991px) {
  }
  /* màn hình tối đa 991px trở xuống*/
  @media (max-width: 991px) {
  }
`;
export const PostComponent = (props: React.PropsWithChildren<IPostProps>) => {
  const {} = props;
  const dispatch = useDispatch();
  const banner = useSelector((state: any) => state.banner);
  React.useEffect(() => {
    dispatch({type:GETBANNER});
  }, []);
  React.useEffect(() => {
    console.log(banner, "banner");
  }, [banner]);

  const onClick = () => {};
  return (
    <_Post>
       <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            title=""
            onClick={onClick}
                      bordered={false}
                      cover={<img alt="example" src={info.post1} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
                      cover={<img alt="example" src={info.post2} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
                      cover={<img alt="example" src={info.post3} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post1} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post2} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post3} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post1} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post2} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post3} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post1} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post2} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post3} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post1} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post2} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post3} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post1} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post2} />}
          >
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=""
            bordered={false}
            cover={<img alt="example" src={info.post3} />}
          >
            Card content
          </Card>
        </Col>
      </Row>
    </_Post>
  );
};
