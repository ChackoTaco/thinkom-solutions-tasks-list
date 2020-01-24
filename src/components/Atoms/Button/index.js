import React from 'react';
import styled from 'styled-components';
import CONSTANTS from '../../../global/constants/cssVariables';

const { colors } = CONSTANTS;

const transition = () => `all 0.45s cubic-bezier(0.65, 0, .076, 1)`;

const Root = styled.div`
  display: inline;
  margin-right: 1rem;
`;

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: 1rem;
  font-family: 'Mukta', sans-serif;
  width: 12rem;
  height: auto;

  &:hover {
    .circle {
      width: 100%;
    }
    .arrow {
      background: ${colors.white};
      transform: translate(1rem, 0);
    }
    .text {
      color: ${colors.white};
    }
  }
`;

const Circle = styled.span`
  transition: ${transition()};
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: ${colors.grey};
  border-radius: 1.625rem;
`;

const Arrow = styled.span`
  transition: ${transition()};
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: none;
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;

  &::before {
    position: absolute;
    content: '';
    top: -0.31rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid ${colors.white};
    border-right: 0.125rem solid ${colors.white};
    transform: rotate(45deg);
  }
`;

const Text = styled.span`
  transition: ${transition()};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: ${colors.grey};
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  width: 12rem;
`;


/**
 * Returns a <button> element.
 * The HTML <button> element represents a clickable button,
 * which can be used in forms or anywhere in a document 
 * that needs simple, standard button functionality.
 * @param {*} props Props to be passed to the <Button> element
 */
 
const Button = props => {
  // const { children, onClick } = props
  return (
    <Root>
      <StyledButton {...props} role="button" aria-pressed="false" aria-expanded="false">
        <Circle className="circle">
          <Arrow className="arrow" />
          <Text className="text" >{props.children}</Text>
        </Circle>
      </StyledButton>
    </Root>
  );
};

export default Button;
export {
  Button
}