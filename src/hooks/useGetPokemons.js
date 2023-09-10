import { useState } from "react";

import getPokemons from "../services/getPokemons";

const newController = () => {
  const controller = new AbortController();
  return controller;
};

const useGetPokemons = () => {
  const [controller, setController] = useState(newController());
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const startRequest = () => {
    if (loading || controller.signal.aborted) return;

    setLoading(true);
    getPokemons(controller.signal)
      .then((response) => {
        setPokemons(response.results);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
        setController(newController());
      });
  };

  const abortRequest = () => {
    if (!loading || controller.signal.aborted) return;

    controller.abort();
  };

  return { pokemons, loading, startRequest, abortRequest };
};

export default useGetPokemons;
