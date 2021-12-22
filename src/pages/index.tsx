import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from './components/Spinner';
import Error from './components/Error';
import { APISearchResponse } from '../types';
import { parseAPIresponse } from '../helpers';
import List from './components/List/Index';
import DetailedView from './components/DetailedView/Index';
import Root, { MainList } from './styles';
import Search from './components/Search/Index';
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
const Index = () => {
  const [viewingImage, setViewingImage] = useState<string>('');
  const [searchString, setSearchString] = useState<string>('');
  const { isLoading, error, data } = useQuery<APISearchResponse>(searchString, () =>
    fetch(`https://images-api.nasa.gov/search?q=${searchString}`).then(res =>
      res.json()
    ),
    {
      enabled: searchString.length !== 0,
    }
  );
  const images = useMemo(() => data && parseAPIresponse(data), [data]);
  
  useEffect(() => {
    const storedSearchValue = localStorage.getItem('searchValue');
    if (storedSearchValue) {
      setSearchString(storedSearchValue);
    }
  }, []);

  const saveSearchString = (value: string) => {
    localStorage.setItem('searchValue', value);
    setSearchString(value);
  }

  const viewingImageData = images && viewingImage && images.find((image) => image.nasaId === viewingImage);
  if (error) {
    return <Error message={ error as string } />
  }

  return (
    <Root>
      { viewingImageData && <DetailedView data={ viewingImageData } onCollapse={ () => setViewingImage('') } /> }
      <MainList>
        <Search value={ searchString } onChange={ saveSearchString} />
        { (isLoading) && <Spinner /> }
        { images && <List images={ images } onImageClick={ setViewingImage } /> }
      </MainList>
    </Root>
  );
}

export default Index;
