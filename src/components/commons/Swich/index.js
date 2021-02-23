import styled from 'styled-components';

const Switch = styled.div`
            cursor: pointer;
            padding-left: 10%;
            margin-left: 5%;
            background-position: 'center';
            background-repeat: no-repeat;
            background-image: url('./images/switchDark.svg');  
            &:active{
                background-image: url('./images/switchLight.svg'); 
                transition: opacity ${({ theme }) => theme.transition};
            }
`;

export default Switch;
