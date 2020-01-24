import React from 'react';
import styled from 'styled-components';
import DivComp from '@material-ui/core/Divider'


const Root = styled(DivComp)``;
/**
 * Returns a <divider> element.
 * The HTML <divider> element 
 * --- 
 * PLEASE 
 * FILL 
 * IN 
 * DETAILS
 * ---
 * @param {*} props Props to be passed to the <divider> element
 */
const Divider = props => {
  return (
    <Root {...props}>
      {props.children}
    </Root>
  );
};

export default Divider;
export {
  Divider
}