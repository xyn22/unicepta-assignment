import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from './components/Spinner';
import Error from './components/Error';
import { APISearchResponse } from '../types';
import { parseAPIresponse } from '../helpers';
import List from './components/List/Index';
import DetailedView from './components/DetailedView/Index';
import Root from './styles';
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
const Index = () => {
  const [viewingImage, setViewingImage] = useState<string>('');
  const [q, setQ] = useState<string>('test');
  const { isLoading, error, data } = useQuery<APISearchResponse>('images', () =>
    fetch(`https://images-api.nasa.gov/search?q=${q}`).then(res =>
      res.json()
    )
  );
  const images = useMemo(() => data && parseAPIresponse(data), [data]);
  const imageData = images && viewingImage && images.find((image) => image.nasaId === viewingImage);
  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <Error message={ error as string } />
  }

  return (
    <Root>
      { images && <List images={ images } onImageClick={ setViewingImage } /> }
      { imageData && <DetailedView data={ imageData } /> }
    </Root>
  );
}

export default Index;
