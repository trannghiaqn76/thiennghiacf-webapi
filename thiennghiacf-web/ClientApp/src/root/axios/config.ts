
export const api = {
  pathUrl: "http://api:9000"
};

export const authConfig = {
  authority: "",
  clientId:"",
  responseType: "",
  redirectUri: "",
  scope: "",
  clientSecret:"",
  silentRedirectUri: "",
  autoSignIn: true,
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export default {
  api,
  authConfig
};
