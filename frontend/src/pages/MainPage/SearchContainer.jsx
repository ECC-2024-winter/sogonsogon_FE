import { SearchBar, Category } from '../../components';

export const SearchContainer = ({ children }) => {
  return (
    <div>
      <SearchBar />
      <Category />
      {children}
    </div>
  );
};
