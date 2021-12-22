import { Error as Root } from './styles';

interface Props {
  message: string,
}

const Error = ({ message }: Props) => (
  <Root>
    { message }
  </Root>
);

export default Error;
