import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../utils/breakpointsMedia';

export const UserStyle = styled.img`
  border-radius: 50%;
  ${({ size }) => {
    if (size === 'smallest') {
      return css`
        width: 32px;
        height: 32px;
      `;
    }
    if (size === 'small') {
      return css`
        width: 38.2px;
        height: 38.2px;
      `;
    }
    if (size === 'medium') {
      return css`
        width: 50.93px;
        height: 51.07px;
      `;
    }
    if (size === 'big') {
      return css`
        width: 64px;
        height: 64px;
      `;
    }
    if (size === 'biggest') {
      return css`
        ${breakpointsMedia({
    xs: css`
            width: 120px;
            height: 12m0px;
          `,
    md: css`
            width: 188px;
            height: 188px;
          `,
  })}
      `;
    }
    if (size === 'other') {
      return css`
        width: 48px;
        height: 48px;
      `;
    }
    return '';
  }}
`;

export default function UserAvatar({ src, size }) {
  return (
    <UserStyle
      src={
        src
        || 'https://images.unsplash.com/photo-1618678900888-da259539f5ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4NzYzMTky&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
      }
      size={size}
      alt="user avatar"
    />
  );
}

UserAvatar.defaultProps = {
  src: 'https://images.unsplash.com/photo-1618678900888-da259539f5ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4NzYzMTky&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
};
UserAvatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string.isRequired,
};
