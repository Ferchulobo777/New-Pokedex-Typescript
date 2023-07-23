import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PokedexLayout from '../common/PokedexLayout';

const ProtectedRoutes = () => {
  const { trainerName } = useSelector(state => state);

  if (trainerName.length >= 3) {
    return <PokedexLayout />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
