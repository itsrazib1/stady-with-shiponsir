import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);
  const isLoading = false;
  const email = user?.email;

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
