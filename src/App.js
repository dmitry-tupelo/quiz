import React from 'react'
import { Box, Container } from '@mui/material'
import Quiz from './Quiz'

function App () {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container size="1">
        <Box>
          <Quiz />
        </Box>
      </Container>
    </Box>
  )
}

export default App
