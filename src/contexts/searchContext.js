import { createContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [searchNameText, setSearchNameText] = useState('');

  return (
    <SearchContext.Provider
      value={{
        searchText: searchText, // searchText,
        setSearchText,
        setSearchNameText,
        searchNameText,
      }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
