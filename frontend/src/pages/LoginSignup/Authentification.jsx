import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalLogout } from '../../components/Modal/ModalLogout/ModalLogout';

const Authentification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === null) {
      navigate('/login', { replace: true }); //뒤로가기 안됨
    } else {
      <ModalLogout />;
    }
  }, []);

  return null;
};

export default Authentification;
