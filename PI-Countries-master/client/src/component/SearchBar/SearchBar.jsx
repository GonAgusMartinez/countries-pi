import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries, filterCountries, sortCountries } from '../../actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchCountries(searchTerm));
  };

  const handleFilter = (continent) => {
    dispatch(filterCountries(continent));
  };

  const handleSort = (order) => {
    dispatch(sortCountries(order));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="">Por continente</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europa">Europa</option>
        <option value="America">America</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        </select>

      <button onClick={() => handleSort('asc')}>Acendente</button>
      <button onClick={() => handleSort('desc')}>Decendente</button>
    </div>
  );
};

export default SearchBar;