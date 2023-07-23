import { useSelector } from 'react-redux';
import FormPoke from '../components/Pokedex/FormPoke';
import PokeContainer from '../components/Pokedex/PokeContainer';
import { useState } from 'react';
import '../views/styles/Pokedex.css'
import Toogle from '../common/Toogle';

const Pokedex = () => {

  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
  const [formUrl, setFormUrl] = useState(urlBase)
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(30);

  const { trainerName } = useSelector(state => state)

  return (
    <section className='pokedex'>
      <div className='pokedex_welcome'>
      <p className='pokedex_title'>Welcome, trainer <span className='pokedex_title_span'>{trainerName}</span> !!! Here you can find any Pokémon you're looking for.</p>
      <Toogle 
      pokemonPerPage={pokemonPerPage} 
      setPokemonPerPage={setPokemonPerPage}/>
      <FormPoke 
      setFormUrl={setFormUrl} 
      setCurrentPage={setCurrentPage}
      urlBase={urlBase}/>
      </div>
      <PokeContainer
      pokemonPerPage={pokemonPerPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      formUrl={formUrl}  />
    </section>
  )
}

export default Pokedex
