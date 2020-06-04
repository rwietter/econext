import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './home.css';
import logo from '../../static/site/assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="logotipo do ecoleta" />
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <Link to="/create-collect-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre agora um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};
export default Home;
