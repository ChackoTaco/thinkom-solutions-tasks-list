import React from 'react';
import styled from 'styled-components';
import S from '../../Atoms';
import TaskList from '../../Organisms/TaskList';
import Container from '../../Layout/Container';

const Root = styled(S.div)`
  button[title="add"] {
    display: none;
  }
`;
/**
 * Returns a <Home> template element.
 * Serves as the home page for the application
 * @param {*} props Props to be passed to the <Home> element
 */
const Home = props => {
  return (
    <Root {...props}>
      <Container>
        <TaskList />
      </Container>
    </Root>
  );
};

export default Home;
export {
  Home
}