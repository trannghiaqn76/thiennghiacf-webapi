import React, { memo } from "react";
import { Result, Button } from "antd";

const Page404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="not_found"
    extra={
      <Button type="primary" href="/">
        Trang chủ
      </Button>
    }
    style={{ marginTop: 48, marginBottom: 16 }}
  />
);

export default memo(Page404);
