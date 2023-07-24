import React, { useState } from "react";
import LogOut from "./LogOut";
import SelectForm from "./SelectForm";
import './PokedexLayout.css';

interface ToogleProps {
  pokemonPerPage: number;
  setPokemonPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Toogle: React.FC<ToogleProps> = ({ pokemonPerPage, setPokemonPerPage }) => {
  const [configurations, setConfigurations] = useState<boolean | null>(false);

  const handleConfiurations = () => {
    setConfigurations(!configurations);
  };

  return (
    <>
      <button
        className="configurations"
        onClick={handleConfiurations}
      >
        <img className="img_configurations" src="/media/preferences.png" alt="" />
      </button>
      {configurations && (
        <article className="configurations__toggle">
          <SelectForm
            pokemonPerPage={pokemonPerPage}
            setPokemonPerPage={setPokemonPerPage}
          />
          <LogOut />
        </article>
      )}
    </>
  );
};

export default Toogle;