import React, { useEffect, useState } from 'react';
import './styles/PokemonCard.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

interface PokemonStats {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
}

interface PokemonSprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

interface Pokemon {
  name: string;
  types: PokemonType[];
  stats: PokemonStats[];
  sprites: PokemonSprites;
}

interface PokemonCardProps {
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ url }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemon, getPokemonById] = useFetch<Pokemon>(url);

  useEffect(() => {
    getPokemonById();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    navigate(`/pokedex/${pokemon?.name}`);
  };

  return (
    <div>
      {loading ? (
        <img className="loader" src="/media/pokeball.png" alt="" />
      ) : (
        <article onClick={handleClick} className={`pokemon border-${pokemon?.types[0].type.name}`}>
          <header className={`pokemon_header bg-${pokemon?.types[0].type.name}`}>
            <img className="pokemon_sprite" src={pokemon?.sprites?.other['official-artwork'].front_default} alt="" />
          </header>
          <section className="pokemon_body">
            <h3 className={`pokemon_name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className="pokemon_type bgicon">
              {pokemon?.types.map((objectType: PokemonType) => (
                <li className="pokemon_type_especific" key={objectType.type.url}>
                  {objectType.type.name}
                  <img
                    src={`/media/${objectType.type.name}.svg`}
                    className={`icon ${objectType.type.name} bg-${objectType.type.name}`}
                    alt={objectType.type.name}
                  />
                </li>
              ))}
            </ul>
            <ul className="pokemon_stats">
              {pokemon?.stats.map((objectStat: PokemonStats) => (
                <li className="pokemon_stats_attr" key={objectStat.stat.url}>
                  <span className="pokemon_state_attr_name">{objectStat.stat.name}</span>
                  <span className={`pokemon_state_attr_value color-${pokemon?.types[0].type.name}`}>
                    {objectStat.base_stat}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      )}
    </div>
  );
};

export default PokemonCard;