import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Abilities.css';

interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

interface PokemonData {
  abilities: Ability[];
  types: {
    type: {
      name: string;
    };
  }[];
}

interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
  };
}

interface PokemonSpeciesData {
  flavor_text_entries: FlavorTextEntry[];
}

const Abilities: React.FC = () => {
  const [aboutPoke, setAboutPoke] = useState<PokemonData | undefined>();
  const [text, setText] = useState<string | undefined>();

  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonRes = await axios.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        setAboutPoke(pokemonRes.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokemonData();
  }, [name]);

  useEffect(() => {
    const fetchPokemonSpeciesData = async () => {
      try {
        const speciesRes = await axios.get<PokemonSpeciesData>(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
        const i = speciesRes.data.flavor_text_entries.findIndex((e) => e.language.name === 'en');
        setText(speciesRes.data.flavor_text_entries[i].flavor_text);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokemonSpeciesData();
  }, [name]);

  return (
    <>
      <div className="about_pokemon">
        <p className={`text_about_pokemon color-${aboutPoke?.types[0].type.name}`}>{text && text}</p>
      </div>
      <div className="about__pokemon-abilities">
        <div className="about__pokemon-abilities-container">
          {aboutPoke?.abilities.map((ability) => (
            <div
              key={ability.ability.url}
              className={`ability bg-${aboutPoke?.types[0].type.name} border-${aboutPoke?.types[0].type.name}`}
            >
              {ability.ability.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Abilities;