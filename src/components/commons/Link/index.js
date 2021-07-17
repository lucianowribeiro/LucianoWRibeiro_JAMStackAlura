/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';

const StyledLink = styled.a`
  ${({ theme, mode, color }) => (color
    ? `color: ${get(theme, `${mode}.${color}.color`)}`
    : 'color: inherit;')};
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transition};
  opacity: 1;
  &:hover,
  &:focus {
    opacity: .7;
  }
`;

export default function Link({
  children, href, color, ...props
}) {
  return (
    <NextLink href={href} passHref>
      <StyledLink color={color} {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Link.defaultProps = {
  color: 'primary.main',
};
