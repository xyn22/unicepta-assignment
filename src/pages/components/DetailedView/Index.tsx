import { Image } from "../../../types";
import Root, { Collapse } from './styles';

interface Props {
  data: Image,
  onCollapse: () => void;
}

const DetailedView = ({ data, onCollapse }: Props) => (
  <Root>
    <Collapse>
      <button onClick={ () => onCollapse() }>❌</button>
    </Collapse>
    <img src={ data.href } title={ data.title } alt={ `nasa ${data.nasaId}` } />
    <p>
      { data.description }
    </p>
  </Root>
);

export default DetailedView;
