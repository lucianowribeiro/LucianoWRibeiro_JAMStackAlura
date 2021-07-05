import styled from 'styled-components';
import { Switch } from '@styled-icons/entypo/Switch';
import { get } from 'lodash';

const SwitchIcon = styled(Switch)`
    color: ${({ theme, mode }) => get(theme, `${mode}.tertiary.main.color`)};
    width: 32px;
    height: 32px;
    &:hover , &:visited {
        color: ${({ theme, mode }) => get(theme, `${mode}.primary.main.color`)};
    }
`;

export default SwitchIcon;
