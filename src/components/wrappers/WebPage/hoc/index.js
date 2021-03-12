/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import WebPage from '..';
import WebGlobalProvider from '../provider';

export default function webPageHOC(PageComponent, { pageProps }) {
  return (props) => (
    <WebGlobalProvider>
      <WebPage {...pageProps}>
        <PageComponent {...props} />
      </WebPage>
    </WebGlobalProvider>
  );
}
