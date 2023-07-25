/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRef, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import '../../views/styles/Pokedex.css';

interface FormPokeProps {
  setFormUrl: (url: string) => void;
  urlBase: string;
  setCurrentPage: (page: number) => void;
}

const FormPoke: React.FC<FormPokeProps> = ({ setFormUrl, urlBase, setCurrentPage }) => {
  const inputPoke = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const url = 'https://pokeapi.co/api/v2/type/';
  const [types, getAllTypes] = useFetch<{ results: { url: string; name: string }[] }>(url);

  useEffect(() => {
    void getAllTypes();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputPoke.current) {
      const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`;
      navigate(path);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    setFormUrl(e.target.value);
  };

  return (
    <div className='container_search_pokedex'>
      <div className='container_input_pokedex'>
        <form onSubmit={handleSubmit}>
          <input className='input_search_pokedex' ref={inputPoke} type='text' />
          <button className='button_search_pokedex'>Search</button>
        </form>
      </div>
      <select className='select_pokedex' onChange={handleChange}>
      <option value={urlBase}>All Pokemons</option>
      {types?.results.map((type: { url: string; name: string }) => (
        <option
          key={type.name}
          value={type.url}
          className={`option_pokedex color-${type.name}`}
        >
          {type.name}
        </option>
      ))}
    </select>
    </div>
  );
};

export default FormPoke;