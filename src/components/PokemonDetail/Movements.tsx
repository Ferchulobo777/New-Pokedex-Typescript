import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import './styles/Movements.css';

interface Move {
  move: {
    name: string;
  };
}

interface Pokemon {
  moves: Move[];
  types: {
    type: {
      name: string;
    };
  }[];
}

const Movements: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const [pokemon, getPokemon] = useFetch<Pokemon>(url);

  useEffect(() => {
    getPokemon();
  }, [name, getPokemon]);

  return (
    <div className="container_movements">
      {pokemon?.moves.map((move: Move) => (
        <div
          className={`container_movements_gral bg_pokemon_detail bg-${pokemon?.types[0].type.name} border-${pokemon?.types[0].type.name}`}
          key={move.move.name}
        >
          <div className="container_movements_individual">{move.move.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Movements;