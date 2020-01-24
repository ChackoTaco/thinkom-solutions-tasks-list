import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    margin: ${props => props.fullSize ? 0: '10px'};
    height: '100%';
`;

const Container = ({ fullSize, children }) => (
    <Root fullSize={fullSize}>{children}</Root>
)

export default Container;
