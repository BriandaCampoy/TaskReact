import { useEffect } from 'react';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

/**
 * Auth Component
 * Renders child components only if the user is authenticated.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to render if authenticated.
 * @returns {JSX.Element} Renders children if authenticated, otherwise redirects to login.
 */
const Auth = ({ children }) => {
  const { getToken } = useToken();
  const navigate = useNavigate();

  /**
   * Redirects to the login page if the user is not authenticated.
   */
  useEffect(() => {
    if (!getToken()) {
      navigate('/login');
    }
  }, []);
  return children;
};

export default Auth;
