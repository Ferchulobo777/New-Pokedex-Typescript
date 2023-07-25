/* eslint-disable @typescript-eslint/no-unsafe-argument */
import axios from "axios";
import { useState } from "react";

const useFetch = (url: string) => {
  const [state, setState] = useState(null);
  const [hasError, setHasError] = useState(null)
  

  const getPokemons = async () => {
    try {
      const res = await axios.get(url);
      setState(res.data);
      setHasError(false)
    } catch (error) {
      console.error(error);
      setHasError(true)
    }
  };

  return [ state, getPokemons, hasError ];
};

export default useFetch;