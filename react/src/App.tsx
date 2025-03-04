import { useState } from 'react';
import {
  AppRoot,
  Box,
  Button,
  Container,
  Code,
  Image,
  Text
} from './elements';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Box flex='center'>
      <Button
        disabled={count > 5}
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>
    </Box>
  )
};

const App = () => {
  return (
    <AppRoot>
      <Container isVerticallyCentred>
        <Box paradigm='bottom'>
          <Box flex='center' paradigm='right'>
            <Image alt='styled icon' src='/assets/icon-styled.svg' />
            <Text size={32}>+</Text>
            <Image alt='vite icon' src='/assets/icon-vite.svg' />
            <Text size={32}>+</Text>
            <Image alt='react icon' src='/assets/icon-react.svg' />
          </Box>
          <Box flex='center'>
            Edit&nbsp;<Code>src/App.tsx</Code>&nbsp;and save to test HMR 
          </Box>
          <Counter />
        </Box>
      </Container>
    </AppRoot>
  )
};

export default App;
