import styled, { css } from 'styled-components';
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle';
import breakpointsMedia from '../utils/breakpointsMedia';

const CloseModal = styled(CloseCircle)`
  color: ${({ theme }) => theme.colors.tertiary.light.color};
  width: 2rem;
  margin-top: 2rem;
  ${breakpointsMedia({
    md: css`
      margin-right: 1rem;
    `,
  })}
  align-self: flex-start;
`;

export default CloseModal;
