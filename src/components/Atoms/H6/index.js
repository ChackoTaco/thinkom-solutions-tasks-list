import React from 'react';
import styled from 'styled-components';
import CONSTANTS from '../../../global/constants/cssVariables';

const { colors } = CONSTANTS;

const Root = styled.h6`
  color: ${colors.grey};
`;

/**
 * Returns the <h6> element.
 * The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.
 * @param {*} props Props to be passed to the <h6> element 
 */
const H6 = (props) => <Root {...props}>{props.children}</Root>

export default H6
export {
    H6
}
