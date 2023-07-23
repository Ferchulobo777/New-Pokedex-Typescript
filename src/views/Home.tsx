import FormNameUser from '../components/Home/FormNameUser'
import '../views/styles/Home.css'

const Home = () => {
  return (
    <div className='background'>
      <img className='background_logo' src="/media/pokemon.png" alt="pokemon-logo" />
      <div className='form_container'>
      <h1 className='title_logo'>Pokedex</h1>
      <h2 className='subtitle_logo'>Hi trainer !!</h2>
      <p className='subtitle_logo'>please give us your name to start</p>
      <FormNameUser/>
      </div>
      <img className='home_poke_bar' src="/media/homePokeBar.png" alt="home_poke_bar" />
    </div>
  )
}

export default Home
