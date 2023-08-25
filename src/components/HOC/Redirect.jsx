import { useEffect } from 'react';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

/**
 * Redirect Component
 * Redirects the user to the home page if authenticated.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to render.
 * @returns {JSX.Element} Redirects the user if authenticated, otherwise renders children.
 */
const Redirect = ({ children }) => {
  const { getToken } = useToken();
  const navigate = useNavigate();

  /**
   * Redirects the user to the home page if authenticated.
   */
  useEffect(() => {
    if (getToken()) {
      navigate('/');
    }
  }, []);

  return children;
};

export default Redirect;
