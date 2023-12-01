import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../actions';

const Paginado = () => {
  const dispatch = useDispatch();
  const { currentPage, totalCountries } = useSelector((state) => state);

  const totalPages = Math.ceil(totalCountries / 10);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      
      <span> Page {currentPage} of {totalPages} </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginado;