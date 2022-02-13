import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTenant, getClientId } from '../../redux/actions';
import { postClientData } from '../../shared/utils';

const ClientForm = () => {
  const [data, setData] = useState({
    name: '',
    sirname: '',
    patronymic: '',
    email: '',
    phone: '',
  });

  const dispatch = useDispatch();

  const singleFlatNumber = useSelector((state) => {
    return state.flats.singleFlat;
  });

  const tenantsList = useSelector((state) => {
    return state.clients.clients.data;
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
      const sendClientData = await postClientData(data, singleFlatNumber);
      const newData = {
        id: sendClientData.id,
        ...data,
      };
      dispatch(addNewTenant(newData));
      dispatch(getClientId(sendClientData.id));
    } catch (error) {
      console.log(error);
    }
  };

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

export default ClientForm;
