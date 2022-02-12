import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFlatsNumbers,
  fetchHouseNumbers,
  fetchStreets,
} from '../redux/actions';
import AddressList from '../entities/addressList/addressList';

function App() {
  return (
    <div className='App'>
      <AddressList />
    </div>
  );
}

export default App;
