import { useEffect } from 'react';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ children }) => {
  const { getToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate('/');
    }
  }, []);
    return children;
}

export default Redirect