import styled from 'styled-components';

export const Container = styled.div`
    z-index: 100;
    position: fixed;
    top: 80px;
    right: 0px;
    width: 100%;
    height: 100%;
    
    transform: translateX(100%);
    transition: .5s transform  cubic-bezier(0.5, 0, 0, 1);
    &.open{
        transform: translateX(0);
    }
`;