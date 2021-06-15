import React from 'react';
import Card from './components/card';
import Theme from './Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 2rem 10vw;
`;

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Card />
      </Container>
    </ThemeProvider>
  );
}
