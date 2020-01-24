import React from 'react';
import styled from 'styled-components';

const Root = styled.a``;

/**
 * Returns the <a> element (or anchor element).
 * The HTML <a> element (or anchor element), with its href attribute, 
 * creates a hyperlink to web pages, files, email addresses, 
 * locations in the same page, or anything else a URL can address.
 * @param {*} props Props to be passed to the <a> element (or anchor element) 
 */
const A = (props) => <Root {...props}>{props.children}</Root>

export default A
export {
    A
}
