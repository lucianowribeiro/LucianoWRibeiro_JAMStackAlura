/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import WebPage from '..';
import WebGlobalProvider from '../provider';

export default function webPageHOC(PageComponent, { pageProps } = { pageProps: {} }) {
  return (props) => (
    <WebGlobalProvider>
      <WebPage
        {...pageProps}
        {...props.pageProps}
      >
        <PageComponent {...props} />
      </WebPage>
    </WebGlobalProvider>
  );
}
