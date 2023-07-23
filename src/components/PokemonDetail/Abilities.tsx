import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/Abilities.css'


const Abilities = () => {
  const [abautPoke, setAbautPoke] = useState();
  const [text, setText] = useState();

  const { name } = useParams();
  
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => {
        setAbautPoke(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [name]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
      .then((res) => {
        const i = res.data.flavor_text_entries.findIndex(
          (e) => e.language.name === "en"
        );
        setText(res.data.flavor_text_entries[i].flavor_text);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <>
    <div className="about_pokemon">
      <p className={`text_about_pokemon color-${abautPoke?.types[0].type.name}`}>{text && text}</p>
    </div>
    <div className="about__pokemon-abilities">
      <div className="about__pokemon-abilities-container">
        {abautPoke?.abilities?.map((ability) => (
          <div
            key={ability.ability.url}
            className={`ability bg-${abautPoke?.types[0].type.name} border-${abautPoke?.types[0].type.name}`}
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
