import styled from 'styled-components';
import { Heart } from '@styled-icons/boxicons-solid/Heart';
import { get } from 'lodash';

const HeartIcon = styled(Heart)`
    color: ${({ theme, mode }) => get(theme, `${mode}.primary.main.color`)};
    width: 19px;
    margin: 0 5px;
`;
export default HeartIcon;
