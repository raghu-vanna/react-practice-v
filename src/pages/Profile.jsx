import React from 'react';
import useLocalStorage from '../utils/UseLocalStorage';
import withLogger from '../utils/withLogger';
import useApi from '../utils/useApi';
import Todos from './Todos';
import CountriesDropdown from '../components/CountriesDropdown';

const UserInfo = () => {
  const { data, loading, error } = useApi('https://jsonplaceholder.typicode.com/users/1');

  if (loading) return <div className="w-10 h-10 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold mb-2">User Info</h3>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
};

const ProfileComponent = () => {
  const [name] = useLocalStorage('username');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Hello {name}</h1>
      <div className="flex flex-row w-full max-w-6xl gap-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <UserInfo />
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md h-96 overflow-y-auto">
          <CountriesDropdown />
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md h-96 overflow-y-auto">
          <Todos />
        </div>
      </div>
    </div>
  );
};
export const Profile = withLogger(ProfileComponent);
