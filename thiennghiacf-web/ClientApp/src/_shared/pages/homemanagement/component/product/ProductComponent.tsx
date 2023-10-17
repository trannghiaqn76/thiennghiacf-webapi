import React from "react";
import {
  Row,
  Col,
  Card,
  InputNumber,
  Form,
  Carousel,
  Avatar,
  Button,
  Image,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import item1 from "images/p-1.jpg";
// import b1 from "images/banner-1.jpg";
// import b4 from "images/banner-4.jpg";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
interface IProductProps {}

const _Product = styled.div`
   
    a{
        text-decoration:none;
        .card {
            width:100% ;
            display: -webkit-box;
            flex-direction: column;
            background: none;
            background-clip: none;
            border: none;
            border-radius: none;
            .card-img-top{
                max-width: 70px;
                height: auto;
                border-radius: 10px;
                padding: 5px;
            }
            .card-body{
                padding-top:10px;
                padding-left:0px;
                color:'#626364';
                .card-title{
                    font-size:17px;
                }
            }
        }
        .card:hover{
            background:'#d1dbe8';
        }
    }
    .item{
      width:100%;
      padding:6px;
      text-decoration: none;
      border-radius: 5px;
      img{
      max-height: 100px;
      max-width: 100px;
      border-radius: 65px;
      vertical-align: -6px;
    }
    svg{
        font-size: 30px;
        margin-left:1px;
    }
      span{    
          font-size: 17px;
          color: '#626364';
          vertical-align: 3px;
          margin-left: 10px;
          font-weight: 600;
      }
    }
    .item:hover{
        background:'#d1dbe8';
        transition:0.3s;
    }
}

.scroll{
    margin-top: 5px;
    height: calc(100vh - 400px);
    overflow-x: hidden;
    overflow-y: auto;
}

.scroll:hover{
  overflow-x: hidden;
  overflow-y: auto;
}

.search{
  width: 100%;
  input{
    width: 100%;
    padding: 5px 15px;
    font-size: 16px;
    margin: 5px 0px 5px 0px;
    font-weight: 400;
    border-radius: 25px;
    outline: none;
    border: none;
    text-transform: uppercase;
    font-weight: normal;
  }
        
}
.f-size-24{
  font-size: 21px !important;
}
`;
const contentStyle: React.CSSProperties = {
  height: "275px",
  background: "white",
  color: "#fff",
  textAlign: "center",
  boxShadow: "0",
  objectFit: "fill",
  overflow: "hidden",
};

export const ProductComponent = (
  props: React.PropsWithChildren<IProductProps>
) => {
  const {} = props;

  return (
    <_Product>
      {/* <Form>
        <Row
          gutter={3}
          style={{ background: "rgb(178, 61, 60)", marginTop: 10 }}
        >
          <Col span={24}>
            <div className="search">
              <input type="text" placeholder="Tìm kiếm sản phẩm" />
            </div>
          </Col>
        </Row>
        <div className="scroll">
          <Row gutter={[16, 16]}>
            <Col
              span={12}
              sm={{ span: 24, flex: 1 }}
              md={{ span: 12, flex: 1 }}
            >
              <Card bodyStyle={{ padding: 5, margin: 5 }} loading={false}>
                <Meta
                  avatar={<Avatar size={100} src={item1} />}
                  title={
                    <>
                      <Link to="#">
                        <h2>TRÀ SEN VÀNG (SEN)</h2>
                      </Link>
                      <strong>25.000đ</strong>
                    </>
                  }
                  description={
                    <div style={{ margin: 0, padding: 0 }}>
                      <InputNumber />{" "}
                      <Button
                        style={{
                          border: "none",
                          borderRadius: 5,
                          width: 40,
                          background: "#b23d3c",
                        }}
                        icon={
                          <ShoppingCartOutlined
                            className="f-size-24"
                            style={{
                              color: "white",
                              fontSize: "24px !important",
                            }}
                          />
                        }
                      />
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col
              span={12}
              sm={{ span: 24, flex: 1 }}
              md={{ span: 12, flex: 1 }}
            >
              <Card bodyStyle={{ padding: 5, margin: 5 }} loading={false}>
                <Meta
                  avatar={<Avatar size={100} src={item1} />}
                  title={
                    <>
                      <Link to="#">
                        <h2>TRÀ SEN VÀNG (SEN)</h2>
                      </Link>
                      <strong>25.000đ</strong>
                    </>
                  }
                  description={
                    <div style={{ margin: 0, padding: 0 }}>
                      <InputNumber />{" "}
                      <Button
                        style={{
                          border: "none",
                          borderRadius: 5,
                          width: 40,
                          background: "#b23d3c",
                        }}
                        icon={
                          <ShoppingCartOutlined
                            className="f-size-24"
                            style={{
                              color: "white",
                              fontSize: "24px !important",
                            }}
                          />
                        }
                      />
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Form> */}
    </_Product>
  );
};
