import React, { ChangeEvent } from "react";
import useFetch from "../hooks/useFetch";
import './PokedexLayout.css';

interface SelectFormProps {
  pokemonPerPage: number;
  setPokemonPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const SelectForm: React.FC<SelectFormProps> = ({ pokemonPerPage, setPokemonPerPage }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(event.target.value);
    setPokemonPerPage(selectedValue);
  };

  return (
    <div className="preferences">
      <div className="preferences__title">
        <p>Pokemon Per Page</p>
      </div>
      <form className="preferences__form">
        <div>
          <input
            name="selected"
            id="6"
            type="radio"
            value="6"
            checked={pokemonPerPage === 6}
            onChange={handleChange}
          />
          <label htmlFor="6">6</label>
        </div>
        <div>
          <input
            name="selected"
            id="12"
            type="radio"
            value="12"
            checked={pokemonPerPage === 12}
            onChange={handleChange}
          />
          <label htmlFor="12">12</label>
        </div>
        <div>
          <input
            name="selected"
            id="18"
            type="radio"
            value="18"
            checked={pokemonPerPage === 18}
            onChange={handleChange}
          />
          <label htmlFor="18">18</label>
        </div>
        <div>
          <input
            name="selected"
            id="24"
            type="radio"
            value="24"
            checked={pokemonPerPage === 24}
            onChange={handleChange}
          />
          <label htmlFor="24">24</label>
        </div>
        <div>
          <input
            name="selected"
            id="30"
            type="radio"
            value="30"
            checked={pokemonPerPage === 30}
            onChange={handleChange}
          />
          <label htmlFor="30">30</label>
        </div>
      </form>
    </div>
  );
};

export default SelectForm;