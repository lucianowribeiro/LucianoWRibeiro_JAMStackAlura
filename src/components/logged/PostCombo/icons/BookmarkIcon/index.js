import React from 'react';
import PropTypes from 'prop-types';

export default function BookmarkIcon({ mode }) {
  const color = mode === 'light' ? '#070C0E' : '#fff';

  return (
    <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.2543 30.4777L13.1137 22.4981L1.97314 30.4777V4.94305C1.97314 4.09653 2.3085 3.28467 2.90543 2.68609C3.50236 2.0875 4.31198 1.75122 5.15617 1.75122H21.0713C21.9155 1.75122 22.7251 2.0875 23.322 2.68609C23.9189 3.28467 24.2543 4.09653 24.2543 4.94305V30.4777Z" stroke={color} strokeWidth="3.19078" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
BookmarkIcon.propTypes = {
  mode: PropTypes.string.isRequired,
};
