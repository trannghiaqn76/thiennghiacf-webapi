import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "images/logo-mini.png";
import { Col, Row } from "antd";

const _Header = styled.div`
    display : flex ;
    position: sticky;
    top: 0px;
    justify-content : space-between;
    align-items : center;
    box-shadow: rgba(40, 42, 49, 0.16) 0px 1px 2px 0px;
    background-color: rgb(255, 255, 255);
    z-index: 1;
    width: 100%;
    border-top:1px solid rgb(255, 255, 255);
    .menu-1{
      display: flex;
      align-items: center;
      padding:0px;
      margin:0px;
    }
    .menu-2{
      padding:0px;
      display:flex;   
      li{
        padding:0px;
        text-align: center;
        width: 100%;
        list-style: none;
        border-radius: 5px 5px 0px 0px;
          .text-menu {
            font-size: 14px;
            line-height: 25px;
            font-weight: bold;
            color: #ffffff;
          }
        }
        .main-nav{
          text-decoration: none;
        }
        .main-nav-active{
          
          border-bottom: 2px solid tomato;
        }
      }
    }
    .pulic-logo {
      display : flex;
      height : 100%;
      align-items : center;
    }
    .search{
        width: 100%;
        input{
          width: 100%;
          padding: 5px 15px;
          font-size: 16px;
          margin: 5px 0px 5px 0px;
          box-sizing: border-box;
          background-color: #f0f2f5;
          color: black;
          font-weight: 400;
          border-radius: 25px;
          outline: none;
          border: none;
        }
        input.empty {
            font-family: FontAwesome;
            font-style: normal;
            font-weight: normal;
            text-decoration: inherit;
        }
    }
`;
interface IDefaultLayoutHeaderProps {}

export const DefaultLayoutHeader = (
  props: React.PropsWithChildren<IDefaultLayoutHeaderProps>
) => {
  const {} = props;
  return (
      <_Header>
    KAKA
      {/* <Row
        style={{
          margin: "auto",
          padding: "0px",
          width: "100%",
          display: "flex",
          background: "#b23d3c",
        }}
      >
        <Col span={7}>
          <div className="menu-1">
            <div className="pulic-logo">
              <NavLink to="/">
                <img
                  style={{ width: 35 }}
                  className="logo"
                  src={logo}
                  alt="thiện nghĩa cf"
                />
              </NavLink>
            </div>
            <div className="search">
              <input type="text" placeholder="Tìm kiếm" />
            </div>
          </div>
        </Col>
        <Col span={12} style={{ margin: "auto", marginLeft: 0 }}>
          <div className="menu-2">
            <li onClick={() => {}}>
              <NavLink to="/" className="main-nav">
                <span className="text-menu">TRANG CHỦ</span>
              </NavLink>
            </li>
            <li onClick={() => {}}>
              <NavLink to="/cong-dong" className="main-nav">
                <span className="text-menu">CỘNG ĐỒNG</span>
              </NavLink>
            </li>
            <li onClick={() => {}}>
              <NavLink to="/tin-tuc" className="main-nav">
                <span className="text-menu">TIN TỨC XÃ HỘI</span>
              </NavLink>
            </li>
            <li onClick={() => {}}>
              <NavLink to="/tin-tuc" className="main-nav">
                <span className="text-menu"> DỊCH VỤ TAXI</span>
              </NavLink>
            </li>
            <li onClick={() => {}}>
              <NavLink to="/ve-chung-toi" className="main-nav">
                <span className="text-menu">VỀ CHÚNG TÔI</span>
              </NavLink>
            </li>
          </div>
        </Col>
        <Col span={12}></Col>
      </Row> */}
    </_Header>
  );
};
