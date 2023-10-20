import React from "react";
import { Row, Col, Form, Carousel, Image } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { info } from "../../../../../root/axios/config";
interface IProductProps {}

const _Banner = styled.div`
    padding-top: 10px;
   
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
   background:'white',
   color: "#fff",
   textAlign: "center",
   boxShadow: "0",
   objectFit:'fill',
   overflow: 'hidden',
 };

export const BannerComponent = React.memo(
  (props: React.PropsWithChildren<IProductProps>) => {
    const {} = props;

    return (
      <_Banner>
        <Form>
          <Row>
            <Col span={24}>
              <Carousel autoplay={true}>
                <div>
                <div style={contentStyle}>
                    <Link to="/profile">
                      <Image
                        src={info.bannerImage1}
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                </div>
                <div>
                <div style={contentStyle}>
                    <Link to="/profile">
                      <Image
                        src={info.bannerImage1}
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Form>
      </_Banner>
    );
  }
);
