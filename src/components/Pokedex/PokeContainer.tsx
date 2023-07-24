import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import PokemonCard from './PokemonCard';
import Pagination from '../Pagination';
import './styles/PokeContainer.css';

interface Pokemon {
  url: string;
  pokemon: {
    url: string;
  };
}

interface PokemonsResponse {
  results?: Pokemon[];
  pokemon?: Pokemon[];
}

interface PokeContainerProps {
  formUrl: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pokemonPerPage: number;
}

const PokeContainer: React.FC<PokeContainerProps> = ({
  formUrl,
  currentPage,
  setCurrentPage,
  pokemonPerPage,
}) => {
  const [pokeCards, setPokeCards] = useState<Pokemon[]>([]);
  const [pokemons, getPokemons] = useFetch<PokemonsResponse>(formUrl);

  useEffect(() => {
    getPokemons();
  }, [formUrl]);

  useEffect(() => {
    if (pokemons?.results) {
      setPokeCards(pokemons.results);
    } else if (pokemons?.pokemon) {
      setPokeCards(pokemons.pokemon.map((objPoke) => objPoke.pokemon));
    }
  }, [pokemons]);

  const lastIndex = currentPage * pokemonPerPage;
  const firstIndex = lastIndex - pokemonPerPage;

  return (
    <>
      <div className='poke_container'>
        {pokemons?.results ? (
          pokemons.results.slice(firstIndex, lastIndex).map((pokemon) => (
            <PokemonCard key={pokemon.url} url={pokemon.url} />
          ))
        ) : (
          pokemons?.pokemon.slice(firstIndex, lastIndex).map((poke) => (
            <PokemonCard key={poke.pokemon.url} url={poke.pokemon.url} />
          ))
        )}
      </div>
      <Pagination
        pokemonPerPage={pokemonPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokemon={pokeCards.length}
      />
    </>
  );
};

export default PokeContainer;