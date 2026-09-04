import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [selectedTrain, setSelectedTrain] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        searchCriteria,
        setSearchCriteria,
        selectedTrain,
        setSelectedTrain,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}