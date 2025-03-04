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
    <Box flex='center'>
      <Button
        disabled={count() > 5}
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
            <Image alt='solid icon' src='/assets/icon-solid.svg' />
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
