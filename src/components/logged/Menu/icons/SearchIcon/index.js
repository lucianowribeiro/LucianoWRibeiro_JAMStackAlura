import React from 'react';
import PropTypes from 'prop-types';

export default function SearchIcon({ mode }) {
  const backgroundColor = mode === 'light' ? '#88989E' : '#D5D5D5';
  return (

    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={`${backgroundColor}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 20.9999L16.6499 16.6499"
        stroke={`${backgroundColor}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

SearchIcon.propTypes = {
  mode: PropTypes.string.isRequired,
};
