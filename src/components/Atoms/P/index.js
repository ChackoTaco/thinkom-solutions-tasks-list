import React from 'react';
import styled from 'styled-components';
import CONSTANTS from '../../../global/constants/cssVariables';

const { colors } = CONSTANTS;

const Root = styled.p`
  color: ${colors.grey};
`;

/**
 * Returns the <p> element.
 * The HTML <p> element represents a paragraph.
 * @param {*} props Props to be passed to the <p> element 
 */
const P = (props) => <Root {...props}>{props.children}</Root>

export default P
export {
    P
}
