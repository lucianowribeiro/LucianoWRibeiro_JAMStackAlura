import React from 'react';
import PropTypes from 'prop-types';

export default function MessageIcon({ mode }) {
  const color = mode === 'light' ? '#070C0E' : '#fff';
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.1221 15.3166C31.1275 17.423 30.6368 19.5009 29.6897 21.381C28.5668 23.6341 26.8405 25.5291 24.7042 26.8539C22.5679 28.1787 20.106 28.8809 17.5942 28.8819C15.4936 28.8873 13.4215 28.3952 11.5465 27.4455L2.47485 30.4778L5.49873 21.381C4.55167 19.5009 4.06089 17.423 4.06637 15.3166C4.06734 12.7978 4.7676 10.3291 6.08873 8.18688C7.40986 6.04468 9.29966 4.31362 11.5465 3.18759C13.4215 2.23791 15.4936 1.74577 17.5942 1.75127H18.39C21.7072 1.93478 24.8404 3.33882 27.1897 5.69455C29.5389 8.05028 30.9391 11.1922 31.1221 14.5186V15.3166Z" stroke={color} strokeWidth="3.19078" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
MessageIcon.propTypes = {
  mode: PropTypes.string.isRequired,
};
