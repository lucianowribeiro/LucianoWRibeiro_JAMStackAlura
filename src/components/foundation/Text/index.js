import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Link from '../../commons/Link';
import { WebPageContext } from '../../wrappers/WebPage/context';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  title: css`
   ${({ theme }) => css`
     font-size: ${theme.typographyVariants.titleXS.fontSize};
     font-weight: ${theme.typographyVariants.titleXS.fontWeight};
     line-height: ${theme.typographyVariants.titleXS.lineHeight};
   `}
   ${breakpointsMedia({
    md: css`
       ${({ theme }) => css`
         font-size: ${theme.typographyVariants.title.fontSize};
         font-weight: ${theme.typographyVariants.title.fontWeight};
         line-height: ${theme.typographyVariants.title.lineHeight};
       `}
     `,
  })}
 `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  color: ${({ theme, color, mode }) => get(theme, `${mode}.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

export default function Text({
  tag, variant, children, href, csmkey, color, ...props
}) {
  const webcontext = React.useContext(WebPageContext);
  const contentCSM = csmkey
    ? webcontext.getCMSContent(csmkey)
    : children;
  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
        color={color}
    // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {contentCSM}
      </TextBase>
    );
  }
  return (
    <TextBase
      as={tag}
      variant={variant}
      color={color}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {contentCSM}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  color: PropTypes.string,
  csmkey: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  color: 'tertiary.main',
  csmkey: undefined,
};
