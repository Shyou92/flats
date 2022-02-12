import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFlatsNumbers,
  fetchHouseNumbers,
  fetchStreets,
} from '../../redux/actions';

const AddressList = () => {
  const streets = useSelector((state) => {
    return state.streets.streets;
  });

  const houseNumbers = useSelector((state) => {
    return state.house.houseNumbers;
  });

  const flatsNumbers = useSelector((state) => {
    return state.flats.flatsNumbers;
  });

  const handleStreet = (e) => {
    streets.filter((str) => {
      if (str.name === e.target.value) {
        dispatch(fetchHouseNumbers(str.id));
      }
    });
    return;
  };

  const handleHouseNumbers = (e) => {
    if (houseNumbers.length === 0) {
      return;
    }
    houseNumbers.filter((house) => {
      if (house.name === e.target.value) {
        dispatch(fetchFlatsNumbers(house.id));
      }
    });
    return;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStreets());
  }, [dispatch]);

  return (
    <section>
      {streets.length === 0 ? (
        <h2>No streets available</h2>
      ) : (
        <select name='streets' id='streets' onChange={handleStreet}>
          <option value=''>Улица</option>
          {streets.map((str) => {
            if (str.cityId === 1) {
              return <option key={str.id}>{str.name}</option>;
            } else {
              return <h2>No streets available</h2>;
            }
          })}
        </select>
      )}
      <select name='houseNumbers' id='' onChange={handleHouseNumbers}>
        <option value=''>Дом</option>
        {houseNumbers.map((number) => {
          return <option key={number.id}>{number.name}</option>;
        })}
      </select>
      <select name='flatsNumbers' id=''>
        <option value=''>Кв./Офис</option>
        {flatsNumbers.map((number) => {
          return <option key={number.id}>{number.name}</option>;
        })}
      </select>
    </section>
  );
};

export default AddressList;
