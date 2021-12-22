import { Images as Root } from './styles';
import { Image } from '../../../types';
import { useCallback } from 'react';

interface Props {
  images: Image[],
  onImageClick: (nasaId: string) => void;
}

const List = ({ images, onImageClick }: Props) => {
  const handleImageClick = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      const target = e.target as any;
      const nasaId = target.key;
      onImageClick(nasaId);
    },
    [],
  )
  return (
    <Root>
      { images.map((image) => (
        <li>
          <img src={image.href} onClick={ handleImageClick } key={ image.nasaId } alt={ image.title } title={ image.title } />
          <p>
            { image.description }
          </p>
        </li>
      ))}
    </Root>
  );
}

export default List;
