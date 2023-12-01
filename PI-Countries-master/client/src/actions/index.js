export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

export const FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE';

export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const SORT_COUNTRIES = 'SORT_COUNTRIES';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST,
});

export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = (error) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error,
});

export const fetchCountryRequest = (countryId) => ({
  type: FETCH_COUNTRY_REQUEST,
  payload: countryId,
});

export const fetchCountrySuccess = (country) => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload: country,
});

export const fetchCountryFailure = (error) => ({
  type: FETCH_COUNTRY_FAILURE,
  payload: error,
});

export const searchCountries = (searchTerm) => ({
  type: SEARCH_COUNTRIES,
  payload: searchTerm,
});

export const filterCountries = (filterType) => ({
  type: FILTER_COUNTRIES,
  payload: filterType,
});

export const sortCountries = (sortType) => ({
  type: SORT_COUNTRIES,
  payload: sortType,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});