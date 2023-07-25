import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Gallery.css';
import useFetch from '../../hooks/useFetch';

// Define the interface for the Pokemon data
interface PokemonData {
  sprites: {
    versions: {
      [key: string]: {
        animated: {
          front_default: string;
          back_default: string;
          front_shiny: string;
          back_shiny: string;
        };
      };
    };
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
        front_shiny: string;
      };
    };
  };
}

const Gallery: React.FC = () => {
  // Get the "name" parameter from the URL
  const { name } = useParams<{ name: string }>();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;

  // Use the custom useFetch hook with the PokemonData interface
  const [pokemon, getPokemon] = useFetch<PokemonData>(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  return (
    <div>
      {pokemon && (
        <div className="galery__container">
          <p className="text__galery">Animations</p>
          <div className="galery__container-box1">
            <img className="img_box_1" src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />
            <img className="img_box_1" src={pokemon.sprites.versions['generation-v']['black-white'].animated.back_default} alt="" />
            <img className="img_box_1" src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_shiny} alt="" />
            <img className="img_box_1" src={pokemon.sprites.versions['generation-v']['black-white'].animated.back_shiny} alt="" />
          </div>
          <p className="text__galery">Dream World</p>
          <div className="galery__container-box2">
            <img className="img_box_2" src={pokemon.sprites.other.dream_world.front_default} alt="" />
          </div>
          <p className="text__galery">3-D</p>
          <div className="galery__container-box3">
            <img className="img_box_3" src={pokemon.sprites.other.home.front_default} alt="" />
            <img className="img_box_3" src={pokemon.sprites.other.home.front_shiny} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;