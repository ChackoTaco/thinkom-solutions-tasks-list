import React from 'react';
import styled from 'styled-components';

const Root = styled.label``;

/**
 * Returns the <label> element.
 * The HTML <label> element represents a caption for an item in a user interface.
 * @param {*} props Props to be passed to the <label> element 
 */
const Label = (props) => <Root {...props}>{props.children}</Root>

export default Label
export {
    Label
}
