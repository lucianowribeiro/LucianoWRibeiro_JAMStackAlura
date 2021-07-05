/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../Link';

const ButtonGhost = css`
  color: ${({ theme, variant, mode }) => get(theme, `${mode}.${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  background-color: ${({ theme, variant, mode }) => get(theme, `${mode}.${variant}.color`)};
  color: ${({ theme, variant, mode }) => get(theme, `${mode}.${variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  border-radius: 8px;
  ${TextStyleVariantsMap.smallestException}

  ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    filter: blur(0.9px);
  }

  ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      /* From md breakpoint */
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
  &:disabled {
    cursor: not-allowed;
    ${({ mode }) => (mode === 'light' ? css`opacity: 0.2` : css`opacity: 0.5`)};
  }
  ${({ fullWidth }) => fullWidth
    && css`
      width: 100%;
    `};
  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
export default function Button({ href, ...props }) {
  const isLink = Boolean(href);
  const componentTag = isLink ? Link : 'button';
  return (
    <ButtonWrapper as={componentTag} href={href} {...props} />
  );
}
Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
};
