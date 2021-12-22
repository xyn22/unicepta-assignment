import { useState } from "react";
import Root from './styles';

interface Props {
  value: string,
  onChange: (value: string) => void,
}

const Search = ({ value, onChange }: Props) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <Root>
      <input
        placeholder="Search..."
        value={ inputValue }
        onChange={ (e) => setInputValue(e.target.value) }
        onKeyPress={ (e) => e.key === 'Enter' && onChange(inputValue) }
      />
      <button onClick={ (e) => onChange(inputValue) }>Search</button>
    </Root>
  );
}


export default Search;
