import { useEffect } from 'react';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const { getToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/login');
    }
  }, []);
    return children;
};

export default Auth;
