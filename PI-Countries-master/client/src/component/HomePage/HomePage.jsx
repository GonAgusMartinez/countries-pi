import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../actions'; 
import SearchBar from '../Searchbar/SearchBar';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import Loading from '../Loading/Loading';

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    dispatch(getCountries()); 
  }, [dispatch]);

  useEffect(() => {

    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countries, searchTerm]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="homepage-container">
      <SearchBar setSearchTerm={setSearchTerm} />
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div className="cards-container">
          {currentCountries.map((country) => (
            <Card key={country.id} country={country} />
          ))}
        </div>
      )}
      <Paginado
        countriesPerPage={countriesPerPage}
        totalCountries={filteredCountries.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Homepage;