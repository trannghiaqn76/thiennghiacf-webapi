import React, { FC } from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async';
import { App } from "./App";
import { ConfigProvider } from "antd";
import vi_VN from "antd/es/locale/vi_VN";
import store from "./root/store/store";
import { ProviderComposer, provider } from "./provider/Compose";
import { authConfig, api } from "./root/axios/config";


export const Authorization: FC = ({ children }) => {

   return <>Login</>
};

export const AuthProvider: FC = ({ children }) => {
  const config = {
    ...authConfig,
    onBeforeSignIn: () => {
      localStorage.setItem('returnURL', JSON.stringify(window.location));
    },

    onSignIn: async (user: any) => {
      localStorage.setItem('access_token', user.access_token);
      //window.location.replace(JSON.parse(localStorage.getItem('returnURL')).href ?? "/");
    },

    onSignOut: async () => {
      localStorage.clear();
      sessionStorage.clear();
    },
  };
  return <>{children}</>;
};

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <ConfigProvider locale={vi_VN}>
          <ProviderComposer provider = {[
            provider(AuthProvider)
            
            ]}>
              <App/>
          </ProviderComposer>         
      </ConfigProvider>
    </Provider>
  </HelmetProvider>,
  document.getElementById("root")
);
