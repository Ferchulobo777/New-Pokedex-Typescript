import { useEffect } from 'react';
import '../PokemonDetail/styles/Stats.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  stats: Stat[];
}

const Stats: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const [pokemon, getPokemon] = useFetch<Pokemon>(url);

  useEffect(() => {
    getPokemon();
  }, [name, getPokemon]);

  return (
    <article className="stats__bars_container">
      <ul className="poke__stats">
        {pokemon?.stats.map((pokeStat: Stat) => (
          <li className="poke__stats-specific" key={pokeStat.stat.url}>
            <div className="poke__stats-info">
              <span className={`poke__stats-label`}>
                {pokeStat.stat.name.charAt(0).toUpperCase() + pokeStat.stat.name.slice(1)}
              </span>
              <span className="poke__stats-value">
                {pokeStat.base_stat} / 150
              </span>
            </div>
            <progress className={`progress__bar`} value={pokeStat.base_stat} max="150"></progress>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Stats;