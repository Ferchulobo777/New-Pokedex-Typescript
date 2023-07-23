import '../common/PokedexLayout.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div>
      <img className='background_header' src="/media/top.png" alt="layout_header" />
      <button 
      className='button_darkmode'
      onClick={toggleDarkMode}>
        <img className='img_darkmode_button'  src={isDarkMode ? '/media/bx-sun.svg' : '/media/bx-moon.svg'} alt="" />
      </button>
      <img className='background_header_logo' src="/media/pokedex.png" alt="" />
    </div>
  );
};

export default Header;