import React from 'react';
import PropTypes from 'prop-types';

export default function MoreIcon({ mode }) {
  const color = mode === 'light' ? '#070C0E' : '#fff';
  return (
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.1142 21.0695C19.9932 21.0695 20.7057 20.355 20.7057 19.4736C20.7057 18.5922 19.9932 17.8777 19.1142 17.8777C18.2352 17.8777 17.5227 18.5922 17.5227 19.4736C17.5227 20.355 18.2352 21.0695 19.1142 21.0695Z" stroke={color} strokeWidth="3.19078" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30.2546 21.0695C31.1336 21.0695 31.8461 20.355 31.8461 19.4736C31.8461 18.5922 31.1336 17.8777 30.2546 17.8777C29.3756 17.8777 28.6631 18.5922 28.6631 19.4736C28.6631 20.355 29.3756 21.0695 30.2546 21.0695Z" stroke={color} strokeWidth="3.19078" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.97335 21.0695C8.85232 21.0695 9.56486 20.355 9.56486 19.4736C9.56486 18.5922 8.85232 17.8777 7.97335 17.8777C7.09438 17.8777 6.38184 18.5922 6.38184 19.4736C6.38184 20.355 7.09438 21.0695 7.97335 21.0695Z" stroke={color} strokeWidth="3.19078" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
MoreIcon.propTypes = {
  mode: PropTypes.string.isRequired,
};
