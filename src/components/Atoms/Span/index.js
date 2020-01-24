import React from 'react';
import styled from 'styled-components';
import CONSTANTS from '../../../global/constants/cssVariables';

const { colors } = CONSTANTS;

const Root = styled.span`
  color: ${colors.grey};
`;

/**
 * Returns the <span> element.
 * The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. 
 * It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang.
 * @param {*} props Props to be passed to the <span> element 
 */
const Span = (props) => <Root {...props}>{props.children}</Root>

export default Span
export {
    Span
}
