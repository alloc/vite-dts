import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { Box } from '../src'
import './global.css'

function App() {
  return (
    <Box
      width="100vw"
      height="100vh"
      background="peachpuff"
      justifyContent="center">
      <Box
        textAlign="center"
        fontFamily="fantasy"
        fontSize="10em"
        color="orange">
        Hello world
      </Box>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
