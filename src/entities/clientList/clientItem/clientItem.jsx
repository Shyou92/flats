const ClientItem = ({ name, phone, email }) => {
  return (
    <section>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </section>
  );
};

export default ClientItem;
