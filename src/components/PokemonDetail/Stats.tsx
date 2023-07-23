import { useEffect, useState } from 'react';
import '../PokemonDetail/styles/Stats.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Stats = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  return (
    <article className="stats__bars_container">
      <ul className="poke__stats">
        {pokemon?.stats.map((pokeStat) => (
          <li className="poke__stats-specific" key={pokeStat.stat.url}>
            <div className="poke__stats-info">
              <span className={`poke__stats-label`}>
                {pokeStat.stat.name.charAt(0).toUpperCase() + pokeStat.stat.name.slice(1)}
              </span>
              <span className="poke__stats-value">
                {pokeStat.base_stat} / 150
              </span>
            </div>
            <progress className={`progress__bar`} value={pokeStat.base_stat} max="100"></progress>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Stats;