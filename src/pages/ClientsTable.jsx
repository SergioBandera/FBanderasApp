import Header from "../components/Header";
import { FETCH_LIST_CLIENTS } from "../constants";
import useFetchApi from "../hooks/useFetchApi";

const ClientsTable = () => {
  const { data: listClients } = useFetchApi(FETCH_LIST_CLIENTS);
  return (
    <div>
      <Header />
      aqui estaría la tabla de clientes
    </div>
  );
};

export default ClientsTable;
