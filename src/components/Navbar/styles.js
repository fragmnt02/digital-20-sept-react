import styled from 'styled-components';
import { Link as LinkComponent } from './Link';

export const Container = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    height: 100px;
`;

export const ContainerLeft = styled.div`
    border: 1px solid blue;
    display:flex;
    align-items:center;
`;

export const ContainerRight = styled.div`
    border: 1px solid red;
`;

export const Logo = styled.img`
    width: 100px;
`;

export const ContainerBotones = styled.div`
    
`;

export const Link = styled(LinkComponent)`
    margin: 10px;
`;
