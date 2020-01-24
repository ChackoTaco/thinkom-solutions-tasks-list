import React from 'react';
import styled from 'styled-components';

const Root = styled.ul`
    list-style-type: none;
`;

/**
 * Returns the <ul> element.
 * The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.
 * @param {*} props Props to be passed to the <ul> element 
 */
const Ul = (props) => <Root {...props}>{props.children}</Root>

export default Ul
export {
    Ul
}
