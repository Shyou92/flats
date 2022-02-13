import AddressList from '../../features/addressList/addressList';
import ClientList from '../../entities/clientList/clientList';
import ClientForm from '../../features/clientForm/clientForm';

const Main = () => {
  return (
    <section>
      <AddressList />
      <ClientForm />
      <ClientList />
    </section>
  );
};

export default Main;
