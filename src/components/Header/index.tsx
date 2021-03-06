import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();

  function handleSelectedPage(page: string): string {
    return pathname === page ? 'selected' : '';
  }

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={handleSelectedPage('/')}>
            Listagem
          </Link>
          <Link to="/import" className={handleSelectedPage('/import')}>
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
