import styled, { css } from 'styled-components';
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle';
import breakpointsMedia from '../utils/breakpointsMedia';

const CloseModal = styled(CloseCircle)`
  color: ${({ theme }) => theme.colors.tertiary.light.color};
  width: 2rem;
  cursor: pointer;
  align-self: flex-end;
  position: absolute;
  ${breakpointsMedia({
    xs: css`
      top: 10px;
      right: 12px;
    `,
    sm: css`
      top: 14px;
      right: 20px;
    `,
    md: css`
      top: 18px;
      right: 31%;
    `,
    lg: css`
      right: 34.5%;
    `,
  })}
`;

export default CloseModal;
