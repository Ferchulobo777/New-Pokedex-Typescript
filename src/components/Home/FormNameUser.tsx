import React, { useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setTrainerName } from '../../store/slices/trainerName.slice';
import { useNavigate } from 'react-router-dom';
import '../../views/styles/Home.css';

const FormNameUser = () => {
  const inputName = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputName.current) {
      dispatch(setTrainerName(inputName.current.value.trim()));
      navigate('/pokedex');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form_input_home'>
      <input className='home_input' ref={inputName} type='text' />
      <button className='button_input'>Start</button>
    </form>
  );
};

export default FormNameUser;