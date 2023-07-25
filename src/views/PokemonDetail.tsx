import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import '../views/styles/PokemonDetail.css';

interface Pokemon {
  name: string;
  id: number;
  weight: number;
  height: number;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites?: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

interface PokemonDetailParams {
  name: string;
}

const PokemonDetail: React.FC = () => {
  const { name } = useParams<PokemonDetailParams>();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFetch<Pokemon>(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate('/pokedex');
  };
  
  return (
    <>
    <button 
    className='pokemon_detail_button_back' 
    onClick={handleClickNavigate}>
      <img className='img_back_button' src="/media/bxs-chevrons-left.svg" alt="" />
    </button>
    <div>
      {hasError ? (
        <section className={`container_pokemon_detail border-${pokemon?.types[0].type.name}`}>
        <header className={`bg_pokemon_detail bg-${pokemon?.types[0].type.name}`}>
          <img
            className="image_pokemondetail"
            src='/media/imageNotFound.png'
            alt=""
          />
        </header>
        <h3 className={`pokemon_detail_pokemon_name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <p className={`pokemon_detail_id bg-${pokemon?.types[0].type.name}`}>N° {pokemon?.id}</p>
        <div className="container_pokemon_info">
          <ul className="pokemon_type">
            {pokemon?.types.map((objectType) => (
              <li className={`pokemon_type_especific color-${objectType.type.name}`} key={objectType.type.url}>
                {objectType.type.name}
                <img
                  src={`/media/${objectType.type.name}.svg`}
                  className={`icon ${objectType.type.name} bg-${objectType.type.name}`}
                  alt={objectType.type.name}
                />
              </li>
            ))}
          </ul>
          <ul className="pokemon_detail_info">
            <li className="PokemonInfo">
              <img className="pokemon_info_img" src="/media/weight.png" alt="" />
              <p className="pokemon_info_name">Weight {pokemon?.weight} kg</p>
            </li>
            <li className="PokemonInfo">
              <img className="pokemon_info_img" src="/media/height.png" alt="" />
              <p className="pokemon_info_name">Height {pokemon?.height} m</p>
            </li>
          </ul>
        </div>
        <nav className="pokemon_detail_nav">
          <ul className= "pokemon_detail_nav_list">
            <li className={`info color-${pokemon?.types[0].type.name}`}>
              <NavLink to={`/pokedex/${name}/about`}>
                About
              </NavLink>
            </li>
            <li className="info">
              <NavLink to={`/pokedex/${name}/stats`}>
                Stats
              </NavLink>
            </li>
            <li className="info">
              <NavLink to={`/pokedex/${name}/moves`}>
                Movements
              </NavLink>
            </li>
            <li className="info">
              <NavLink to={`/pokedex/${name}/evolutions`}>
                Evolutions
              </NavLink>
            </li>
            <li className="info">
              <NavLink to={`/pokedex/${name}/gallery`}>
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </section>
      ) : (
        <section className={`container_pokemon_detail border-${pokemon?.types[0].type.name}`}>
          <header className={`bg_pokemon_detail bg-${pokemon?.types[0].type.name}`}>
            <img
              className="image_pokemondetail"
              src={pokemon?.sprites?.other['official-artwork'].front_default}
              alt=""
            />
          </header>
          <h3 className={`pokemon_detail_pokemon_name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
          <p className={`pokemon_detail_id bg-${pokemon?.types[0].type.name}`}>N° {pokemon?.id}</p>
          <div className="container_pokemon_info">
            <ul className="pokemon_type">
              {pokemon?.types.map((objectType) => (
                <li className={`pokemon_type_especific color-${objectType.type.name}`} key={objectType.type.url}>
                  {objectType.type.name}
                  <img
                    src={`/media/${objectType.type.name}.svg`}
                    className={`icon ${objectType.type.name} bg-${objectType.type.name}`}
                    alt={objectType.type.name}
                  />
                </li>
              ))}
            </ul>
            <ul className="pokemon_detail_info">
              <li className="PokemonInfo">
                <img className="pokemon_info_img" src="/media/weight.png" alt="" />
                <p className="pokemon_info_name">Weight {pokemon?.weight} kg</p>
              </li>
              <li className="PokemonInfo">
                <img className="pokemon_info_img" src="/media/height.png" alt="" />
                <p className="pokemon_info_name">Height {pokemon?.height} m</p>
              </li>
            </ul>
          </div>
          <nav className="pokemon_detail_nav">
            <ul className="pokemon_detail_nav_list">
              <li className={`info color-${pokemon?.types[0].type.name}`}>
                <NavLink to={`/pokedex/${name}/about`}>
                  About
                </NavLink>
              </li>
              <li className={`info color-${pokemon?.types[0].type.name}`}>
                <NavLink to={`/pokedex/${name}/stats`}>
                  Stats
                </NavLink>
              </li>
              <li className={`info color-${pokemon?.types[0].type.name}`}>
                <NavLink to={`/pokedex/${name}/moves`}>
                  Movements
                </NavLink>
              </li>
              <li className={`info color-${pokemon?.types[0].type.name}`}>
                <NavLink to={`/pokedex/${name}/evolutions`}>
                  Evolutions
                </NavLink>
              </li>
              <li className={`info color-${pokemon?.types[0].type.name}`}>
                <NavLink to={`/pokedex/${name}/gallery`}>
                  Gallery
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </section>
      )}
    </div>
    </>
  );
};

export default PokemonDetail;