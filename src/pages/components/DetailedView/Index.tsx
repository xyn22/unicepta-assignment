import { Image } from "../../../types";
import Root from './styles';

interface Props {
  data: Image,
}

const DetailedView = ({ data }: Props) => (
  <Root>
    <img src={ data.href } title={ data.title } alt={ `nasa ${data.nasaId}` } />
    <p>
      { data.description }
    </p>
  </Root>
);

export default DetailedView;
