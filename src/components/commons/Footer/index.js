/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import HeartIcon from '../../../theme/icons/HeartIcon';
import Text from '../../foundation/Text';
import Link from '../Link';
import AluraIcon from '../../../theme/icons/AluraIcon';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  & > a > svg {
    width: 58px;
    margin-right: 12px;
    margin-bottom: 6px;
  }
  & a {
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer({ ...props }) {
  return (
    <FooterWrapper {...props}>
      <Link href="https://www.alura.com.br/">
        <AluraIcon {...props} />
      </Link>
      <Text tag="p" color="tertiary.main" {...props}>
        Criado com
        <HeartIcon {...props} />
        por
        {' '}
        <Link href="https://github.com/lucianowribeiro/" color="primary.main" {...props}>
          <Text>@lucianowribeiro</Text>
        </Link>
        {' '}
        durante
        {' '}
        o
        {' '}
        <Link href="https://www.alura.com.br/" color="primary.main" {...props}>
          <Text>Bootcamp Alura JAM Stack</Text>
        </Link>
      </Text>
    </FooterWrapper>
  );
}
