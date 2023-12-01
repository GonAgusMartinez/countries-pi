import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';

const DetailPage = () => {
  const { idPais } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/countries/${idPais}`);
        setCountryInfo(response.data);
      } catch (error) {
        console.error('Error fetching country details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idPais]);

  return (
    <div className="detail-page-container">
      {loading ? (
        <Loading />
      ) : countryInfo ? (
        <>
          <h2>{countryInfo.name.common}</h2>
          <img src={countryInfo.flags.png} alt={`Flag of ${countryInfo.name.common}`} />
          <p>ID: {countryInfo.cca3}</p>
          <p>Continente: {countryInfo.continents[0]}</p>
          <p>Capital: {countryInfo.capital[0]}</p>
          {countryInfo.subregion && <p>Subregión: {countryInfo.subregion}</p>}
          {countryInfo.area && <p>Área: {countryInfo.area.toLocaleString()} km²</p>}
          <p>Población: {countryInfo.population.toLocaleString()}</p>
        </>
      ) : (
        <p>Error al cargar la información del país.</p>
      )}
    </div>
  );
};

export default DetailPage;