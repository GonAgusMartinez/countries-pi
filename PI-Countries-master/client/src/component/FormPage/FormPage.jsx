
import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    selectedCountries: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountrySelection = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      selectedCountries: [...formData.selectedCountries, value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="form-page-container">
      <h2>Crear Actividad Turística</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Dificultad:
          <input
            type="number"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Duración:
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Temporada:
          <input
            type="text"
            name="season"
            value={formData.season}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Seleccionar Países:
          <select
            multiple
            name="selectedCountries"
            value={formData.selectedCountries}
            onChange={handleCountrySelection}
            required
          >
            <option value="country1">País 1</option>
            <option value="country2">País 2</option>
          </select>
        </label>

        <button type="submit">Crear Actividad</button>
      </form>
    </div>
  );
};

export default FormPage;