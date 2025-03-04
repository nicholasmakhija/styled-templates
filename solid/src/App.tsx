import { createSignal } from 'solid-js';
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
  const [count, setCount] = createSignal(0);

  return (
    <Box flex='center' paradigm='right'>
      <Button
        disabled={count() >= 5}
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count()}
      </Button>
      <Button
        variant='outline'
        disabled={count() === 0}
        onClick={() => setCount(0)}
      >
        reset
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
            <Image alt='solid icon' src='/assets/icon-solid.svg' />
            <Text size={32}>+</Text>
            <Image alt='vite icon' src='/assets/icon-vite.svg' />
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
