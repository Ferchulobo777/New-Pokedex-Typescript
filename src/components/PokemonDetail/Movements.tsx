import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import './styles/Movements.css';

const Movements = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const [pokemon, getPokemons] = useFetch(url);

  useEffect(() => {
    getPokemons();
  }, [name, getPokemons]);



  return (
    <>
      {
        <div className="container_movements">
          {pokemon?.moves.map((move) => (
            <div className={`container_movements_gral bg_pokemon_detail bg-${pokemon?.types[0].type.name} border-${pokemon?.types[0].type.name}`}
            key={move.move.name}>
              <div className="container_movements_indidual">{move.move.name}</div>
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default Movements;