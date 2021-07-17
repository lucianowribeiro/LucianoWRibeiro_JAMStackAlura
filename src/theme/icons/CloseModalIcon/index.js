import styled, { css } from 'styled-components';
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle';
import { get } from 'lodash';
import breakpointsMedia from '../../utils/breakpointsMedia';

const CloseModalIcon = styled(CloseCircle)`
  color: ${({ theme, mode }) => get(theme, `${mode}.tertiary.light.color`)};
  width: 2rem;
  cursor: pointer;
  align-self: flex-end;
  ${({ type }) => (type === 'user'
    ? css`
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
        `
    : css`
          ${breakpointsMedia({
      xs: css`
              margin-bottom: 0.5rem;
            `,
      md: css`
              margin-bottom: 0rem;
            `,
    })}

          margin-top: 0.5rem;
          margin-right: 1rem;
        `)}
`;

export default CloseModalIcon;
