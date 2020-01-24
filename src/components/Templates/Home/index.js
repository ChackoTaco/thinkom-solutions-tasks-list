import React from 'react';
import styled from 'styled-components';
import S from '../../Atoms'
import TaskList from '../../Organisms/TaskList'

const Root = styled(S.div)``;
/**
 * Returns a <Home> template element.
 * Serves as the home page for the application
 * @param {*} props Props to be passed to the <Home> element
 */
const Home = props => {
  return (
    <Root {...props}>
      <TaskList />
    </Root>
  );
};

export default Home;
export {
  Home
}