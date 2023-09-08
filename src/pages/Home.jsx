import { useEffect, useState } from "react";
import useFetchClients from "../hooks/useFetchClients";
const Home = () => {
  const rutaCharacter = "https://rickandmortyapi.com/api/character";
  const [idCharacter, setIdCharacter] = useState(undefined);
  const { data: listClients } = useFetchClients(rutaCharacter, 1);
  const { data: characterData } = useFetchClients(
    rutaCharacter + "/",
    idCharacter
  );

  useEffect(() => {
    if (listClients !== undefined) {
      console.log("tienes un id para ahora buscar");
      setIdCharacter(listClients.results[6].id);
      console.log(idCharacter);
    }
  }, [listClients]);

  useEffect(() => {
    if (characterData !== undefined) {
      console.log("no hay nada");
    }
    if (characterData !== undefined) {
      console.log(characterData);
      console.log(characterData.results);
    }
  }, [characterData]);

  return (
    <div>
      Estas en el home
      <p>aqui aparecerá el primera personaje:</p>
      <p> {listClients?.results[6].name}</p>
      <p>Ahora aqui estará si esta vivo</p>
      <p>{characterData?.status}</p>
    </div>
  );
};

export default Home;
