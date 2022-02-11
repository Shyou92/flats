import { useSelector } from 'react-redux';

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

  return (
    <section>
      {streets.length === 0 ? (
        <h2>No streets available</h2>
      ) : (
        <select name='streets' id=''>
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
      <select name='houseNumbers' id=''>
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
