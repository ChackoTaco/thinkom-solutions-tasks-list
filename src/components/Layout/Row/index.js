import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    width: 100%;
`

const Row = ({ children }) => (
    <Root>{children}</Root>
)


export default Row;
