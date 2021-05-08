import React from 'react'
import styled from 'styled-components';

import LoaderComponent from '../src/components/LoaderComponent'

const Container = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  width: auto;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  flex-direction: column;
  flex-wrap:wrap
`;

function App() {
  
  return (
    <Container>
      <LoaderComponent />
    </Container>
  );
}

export default App;
