import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchFlatsNumbers,
  fetchHouseNumbers,
  fetchStreets,
} from '../redux/actions';
import AddressList from '../entities/addressList/addressList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStreets());
    dispatch(fetchHouseNumbers());
    dispatch(fetchFlatsNumbers());
  }, [dispatch]);

  return (
    <div className='App'>
      <AddressList />
    </div>
  );
}

export default App;
