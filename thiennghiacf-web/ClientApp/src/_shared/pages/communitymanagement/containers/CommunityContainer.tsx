import React from "react";
import styled from "styled-components";
interface IProfileProps {}

const _Profile = styled.div`
  min-height: 100%;
  background: #ffffff;
  border-radius: 5px;
  padding: 40px;
  h3 {
    font-size: 22px;
    margin-bottom: 40px;
  }
  .row {
    margin-bottom: 20px;
    .col-md-10 {
      display: flex;
      flex-wrap: 10px;
      .form-label {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

export const CommunityContainer = (
  props: React.PropsWithChildren<IProfileProps>
) => {
  const {} = props;

  return (
    <_Profile>
      <h3>Trách nhiệm cộng đồng</h3>
    </_Profile>
  );
};
