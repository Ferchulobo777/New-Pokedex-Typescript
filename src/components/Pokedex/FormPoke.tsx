import { useRef, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import '../../views/styles/Pokedex.css'

const FormPoke = ({ setFormUrl, urlBase, setCurrentPage }) => {
  const inputPoke = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const url = 'https://pokeapi.co/api/v2/type/';
  const [types, getAllTypes] = useFetch(url);

  useEffect(() => {
    getAllTypes();
  }, []);


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const path = `/pokedex/${inputPoke.current?.value.trim().toLowerCase()}`;
    navigate(path);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1)
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
        {types?.results.map(type => (
          <option 
          key={type.url} 
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