import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClientsList } from '../../redux/actions';
import { getTenantsData } from '../../shared/utils';
import ClientItem from './clientItem/clientItem';

const ClientList = () => {
  const dispatch = useDispatch();

  const singleFlatNumber = useSelector((state) => {
    return state.flats.singleFlat;
  });

  const tenantsList = useSelector((state) => {
    return state.clients.clients.data;
  });

  useEffect(() => {
    getClients();
  }, [singleFlatNumber.id, dispatch]);

  const getClients = async () => {
    if (singleFlatNumber.id === undefined) {
      return;
    }
    const fetch = await getTenantsData(singleFlatNumber.id);
    dispatch(getClientsList(fetch));
  };
  console.log(tenantsList);
  return (
    <section>
      {tenantsList === undefined ? (
        <p>Здесь будут показаны жильцы квартир</p>
      ) : (
        tenantsList.map((t) => {
          return (
            <ClientItem
              key={t.id}
              name={t.name}
              phone={t.phone}
              email={t.email}
            />
          );
        })
      )}
    </section>
  );
};

export default ClientList;
