import React from 'react';
import styled from 'styled-components';

const Root = styled.ol``;

/**
 * Returns the <ol> element.
 * The HTML <ol> element represents an ordered list of items — typically rendered as a numbered list.
 * @param {*} props Props to be passed to the <ol> element 
 */
const Ol = (props) => <Root {...props}>{props.children}</Root>

export default Ol
export {
    Ol
}
