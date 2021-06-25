import styled, { css } from 'styled-components';
import { PlusCircleFill } from '@styled-icons/bootstrap/PlusCircleFill';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const AddIcon = styled(PlusCircleFill)`
  width: 32px;
  height: 38px;
  color: ${({ theme }) => theme.colors.secondary.main.color};
  background-color: ${({ theme }) => theme.colors.background.light.color};
`;
const MenuWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background.light.color};
  display: flex;
  width: 100%;
  z-index: 2;
  align-items: center;
  ${breakpointsMedia({
    xs: css`
      height: 76.8px;
      justify-content: center;
      & button:nth-child(2) {
        order: 4;
      }
      & button:nth-child(3) {
        margin-right: 96px;
        order: 2;
      }
      & button:nth-child(4) {
        order: 5;
      }
      & button:nth-child(5) {
        order: 6;
      }
      & button:nth-child(6) {
        order: 7;
      }
      box-shadow: 0.5px 0 3px
        ${({ theme }) => theme.colors.tertiary.light.color};
      border-radius: ${({ theme }) => theme.borderRadius};
      & > a {
        position: absolute;
        top: 0;
        height: 64px;
      }
      & > a > svg{
        height: inherit;
      }
    `,
    md: css`
      height: 96px;
      & button:nth-child(2) {
        order: 2;
      }
      & button:nth-child(3) {
        margin-right: 32px;
        order: 3;
      }
      & button:nth-child(4) {
        order: 4;
      }
      & button:nth-child(5) {
        order: 5;
      }
      & button:nth-child(6) {
        order: 6;
      }
      box-shadow: 0 0.5px 1px
        ${({ theme }) => theme.colors.tertiary.light.color};
      border-radius: initial;
      justify-content: space-around;
      & > a{
        position: initial;
      }
    `,
  })}
`;

MenuWrapper.LeftSide = styled.nav`
  display: flex;
  & button {
    padding: 0;
    height: 38px;
    margin-right: 30px;
  }
  ${breakpointsMedia({
    xs: css`
      justify-content: center;
    `,
    md: css`
      justify-content: space-evenly;
    `,
  })}
`;

MenuWrapper.SearchSide = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  ${breakpointsMedia({
    xs: css`
      order: 3;
      & > svg {
        top: 5px;
        left: -64px;
        position: absolute;
        z-index: 3;
      }
      & > div > input {
        display: none;
      }
    `,
    md: css`
     order: 2;
      margin-right: 8%;
      width: 380px;
      & > svg {
        top: 10px;
        left: 40px;
        position: absolute;
        z-index: 3;
        height: 24px;
      }
      & > div {
        margin-bottom: 0;
        width: 80%;
      }
      & > div > input {
        display: block;
        padding-left: 40px;
      }
    `,
  })}
`;

export default MenuWrapper;
