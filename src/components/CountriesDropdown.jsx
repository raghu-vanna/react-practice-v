import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../queries/countries';

const CountriesDropdown = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error fetching countries: {error.message}</p>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Select Country and View States</h2>
      <div className="mb-4">
        <label htmlFor="country" className="block mb-2 font-medium">Country</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="p-2 border rounded-md w-full"
        >
          <option value="">Select a country</option>
          {data.countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCountry && (
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="font-bold mb-2">States in {selectedCountry}</h3>
          <ul className="list-disc list-inside">
            {data.countries
              .find((country) => country.name === selectedCountry)
              .states.map((state, index) => (
                <li key={index}>{state.code || 'N/A'}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountriesDropdown;
