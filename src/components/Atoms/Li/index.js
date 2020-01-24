import React from 'react';
import styled from 'styled-components';

const Root = styled.li``;

/**
 * Returns the <li> element.
 * The HTML <li> element is used to represent an item in a list.
 * @param {*} props Props to be passed to the <li> element 
 */
const Li = (props) => <Root {...props}>{props.children}</Root>

export default Li
export {
    Li
}
