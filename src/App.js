import React from 'react';
import Quiz from './Quiz';
import { Box, Container } from '@radix-ui/themes';

function App() {
  return (
    <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)', height: "100vh", alignItems: "center", justifyContent: "center", display: "flex" }}>
      <Container size="1">
        <Box>
          <Quiz />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
