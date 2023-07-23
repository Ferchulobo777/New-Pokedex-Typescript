import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Gallery.css';
import useFetch from '../../hooks/useFetch';

const Gallery = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;

  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  return (
    <div>
      {pokemon && (
        <div className="galery__container">
          <p className="text__galery">Animations</p>
          <div className="galery__container-box1">
            <img className='img_box_1'
              src={
                pokemon.sprites.versions['generation-v']['black-white'].animated
                  .front_default
              }
              alt=""
            />
            <img
            className='img_box_1'
              src={
                pokemon.sprites.versions['generation-v']['black-white'].animated
                  .back_default
              }
              alt=""
            />
            <img
            className='img_box_1'
              src={
                pokemon.sprites.versions['generation-v']['black-white'].animated
                  .front_shiny
              }
              alt=""
            />
            <img
            className='img_box_1'
              src={
                pokemon.sprites.versions['generation-v']['black-white'].animated
                  .back_shiny
              }
              alt=""
            />
          </div>
          <p className="text__galery">Dream World</p>
          <div className="galery__container-box2">
            <img 
            className='img_box_2'src={pokemon.sprites.other.dream_world.front_default} alt="" />
          </div>
          <p className="text__galery">3-D</p>
          <div className="galery__container-box3">
            <img className='img_box_3' src={pokemon.sprites.other.home.front_default} alt="" />
            <img className='img_box_3' src={pokemon.sprites.other.home.front_shiny} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;