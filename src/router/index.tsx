import { createBrowserRouter } from 'react-router-dom';
import PokedexLayout from '../common/PokedexLayout';
import ProtectedRoutes from '../views/ProtectedRoutes';
import Home from '../views/Home';
import Pokedex from '../views/Pokedex';
import PokemonDetail from '../views/PokemonDetail';
import Abilities from '../components/PokemonDetail/Abilities';
import Stats from '../components/PokemonDetail/Stats';
import Movements from '../components/PokemonDetail/Movements';
import Evolutions from '../components/PokemonDetail/Evolutions';
import Gallery from '../components/PokemonDetail/Gallery';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: (
      <ProtectedRoutes>
        <PokedexLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: '/pokedex',
        element: <Pokedex />,
      },
      {
        path: ':name',
        element: <PokemonDetail />,
        children: [
          { path: 'about', element: <Abilities /> },
          { path: 'stats', element: <Stats /> },
          { path: 'moves', element: <Movements /> },
          { path: 'evolutions', element: <Evolutions /> },
          { path: 'gallery', element: <Gallery /> },
        ],
      },
    ],
  },
]);

export default router;