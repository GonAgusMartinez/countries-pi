import {
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_FAILURE,
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE,
    SEARCH_COUNTRIES,
    FILTER_COUNTRIES,
    SORT_COUNTRIES,
    SET_CURRENT_PAGE,
  } from '../actions';
  
  const initialState = {
    countries: [],
    country: null,
    loading: false,
    error: null,
    searchTerm: '',
    filterType: '',
    sortType: '',
    currentPage: 1,
    countriesPerPage: 10,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COUNTRIES_REQUEST:
      case FETCH_COUNTRY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case FETCH_COUNTRIES_SUCCESS:
        return {
          ...state,
          loading: false,
          countries: action.payload,
        };
  
      case FETCH_COUNTRY_SUCCESS:
        return {
          ...state,
          loading: false,
          country: action.payload,
        };
  
      case FETCH_COUNTRIES_FAILURE:
      case FETCH_COUNTRY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case SEARCH_COUNTRIES:
        return {
          ...state,
          searchTerm: action.payload,
          currentPage: 1, 
        };
  
      case FILTER_COUNTRIES:
        return {
          ...state,
          filterType: action.payload,
          currentPage: 1, 
        };
  
      case SORT_COUNTRIES:
        return {
          ...state,
          sortType: action.payload,
        };
  
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;