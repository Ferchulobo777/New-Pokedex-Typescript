import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import PokemonCard from '../Pokedex/PokemonCard';
import './styles/Evolutions.css'

const Evolutions = () => {
  const [pokemonsGroup, setPokemonsGroup] = useState([]);
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon-species/${name}/`;

  const [pokemonSpecies, getPokemonSpecies] = useFetch(url);

  useEffect(() => {
    getPokemonSpecies();
  }, [name]);

  useEffect(() => {
    if (pokemonSpecies?.evolution_chain?.url) {
      const evolutionURL = pokemonSpecies.evolution_chain.url;
      fetchEvolutionChain(evolutionURL);
    }
  }, [pokemonSpecies]);

  const fetchEvolutionChain = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const group = [];
        group.push(data.chain.species.name);
        if (data.chain.evolves_to.length !== 0) {
          group.push(data.chain.evolves_to[0].species.name);
          if (data.chain.evolves_to[0].evolves_to.length !== 0) {
            group.push(data.chain.evolves_to[0].evolves_to[0].species.name);
          }
        }
        setPokemonsGroup(group);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container_evolutions'>
      {pokemonsGroup.map((pokemon, index) => (
        <PokemonCard className='card_evolution' name={name} key={index} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}/`} />
      ))}
    </div>
  );
};

export default Evolutions;
