import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;
/**
 * Returns a <div> element.
 * The HTML <div> element is the generic container for flow content. 
 * It has no effect on the content or layout until styled using CSS.
 * @param {*} props Props to be passed to the <div> element
 */
const Div = props => {
  return (
    <Root {...props}>
      {props.children}
    </Root>
  );
};

export default Div;
export {
  Div
}