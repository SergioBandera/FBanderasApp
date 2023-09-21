import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import { FETCH_LIST_CLIENTS, FETCH_ONE_CLIENT } from "../constants";
const Home = () => {
  const [idClient, setIdClient] = useState();
  const { data: listClients } = useFetchApi(FETCH_LIST_CLIENTS);
  const { data: selectedClientData } = useFetchApi(FETCH_ONE_CLIENT, idClient);

  // console.log(FETCH_LIST_CLIENTS);
  // console.log(listClients);

  return (
    <div>
      Esta es la aplicación de Fbanderas, dirigete a la pantalla de login
    </div>
  );
};

export default Home;
