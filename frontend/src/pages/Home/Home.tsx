import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import * as S from './styles';
import ToggleTheme from '../../components/ToogleTheme/ToogleTheme';
import logo from '../../static/site/assets/logo.svg';

type Toggle = {
  theme: string | boolean;
  toggleTheme: string | boolean;
};

const Home: React.FC<Toggle> = ({ theme, toggleTheme }) => {
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <img src={logo} alt="logotipo do ecoleta" />
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        </S.Header>
        <S.Main>
          <S.H1>Seu marketplace de coleta de resíduos.</S.H1>
          <S.P>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</S.P>
          <S.StyledLink to="/create-collect-point">
            <S.Span>
              <FiLogIn
                style={{
                  color: '#fff',
                  width: '1.25rem',
                  height: '1.25rem',
                }}
              ></FiLogIn>
            </S.Span>
            <S.Strong>Cadastre agora um ponto de coleta</S.Strong>
          </S.StyledLink>
        </S.Main>
      </S.Content>
    </S.Home>
  );
};
export default Home;
