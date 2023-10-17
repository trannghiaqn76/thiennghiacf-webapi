import React from 'react';

export const provider = (provider: any, props = {}) => [provider, props];

export const ProviderComposer = ({ providers, children }: any) => {
  for (let i = providers?.length - 1; i >= 0; --i) {
    const [Provider, props] = providers[i];
    children = <Provider {...props}>{children}</Provider>;
  }
  return children;
};