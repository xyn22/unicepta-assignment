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
      const nasaId = target.id;
      onImageClick(nasaId);
    },
    [onImageClick],
  )
  return (
    <Root>
      { images.map((image) => (
        <li key={ image.nasaId }>
          <img src={image.href} onClick={ handleImageClick } id={ image.nasaId } alt={ image.title } title={ image.title } />
          <p>
            { image.title }
          </p>
        </li>
      ))}
    </Root>
  );
}

export default List;
