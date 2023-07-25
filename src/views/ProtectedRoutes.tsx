import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PokedexLayout from '../common/PokedexLayout';

interface RootState {
  trainerName: string;
}

const ProtectedRoutes = () => {
  const { trainerName } = useSelector((state: RootState) => state);

  if (trainerName.length >= 3) {
    return <PokedexLayout />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
