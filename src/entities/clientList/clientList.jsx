import { useState } from 'react';
import { useSelector } from 'react-redux';
import { postClientData } from '../../shared/utils';

const ClientList = () => {
  const [data, setData] = useState({
    name: '',
    sirname: '',
    patronymic: '',
    email: '',
    phone: '',
  });

  const singleFlatNumber = useSelector((state) => {
    return state.flats.singleFlat;
  });

  const onChange = (e) => {
    const { name } = e.target;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postClientData(data, singleFlatNumber).then((res) =>
        console.log(res)
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Имя</label>
        <input
          type='text'
          name='name'
          id='name'
          value={data.name}
          onChange={onChange}
        />

        <label htmlFor='sirname'>Фамилия</label>
        <input
          type='text'
          name='sirname'
          id='sirname'
          value={data.sirname}
          onChange={onChange}
        />

        <label htmlFor='patronymic'>Отчество</label>
        <input
          type='text'
          name='patronymic'
          id='patronymic'
          value={data.patronymic}
          onChange={onChange}
        />

        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          value={data.email}
          onChange={onChange}
        />

        <label htmlFor='tel'>Номер телефона</label>
        <input
          type='tel'
          name='phone'
          id='tel'
          value={data.phone}
          required
          onChange={onChange}
        />

        <button type='submit'>Тык</button>
      </form>
    </section>
  );
};

export default ClientList;
