import BackgroundLight from '../static/site/assets/home-background.svg';
import BackgroundDark from '../static/site/assets/home-background-dark.svg';
import LogoLight from '../static/site/assets/logo.svg';
import LogoDark from '../static/site/assets/logo-dark.svg';

export const lightTheme = {
  body: '#f0f0f5',
  text: '#322153',
  textBorred: '#626262',
  backgroundImage: BackgroundLight,
  toggleBorder: '#FFF',
  toggle: '#000',
  logo: LogoLight,
  title: '#c12b5c',
  link: '#0c9c5c',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
  body: '#171719',
  text: '#FAFAFA',
  textBorred: '#cccccc',
  toggleBorder: '#6B8096',
  backgroundImage: BackgroundDark,
  toggle: '#FFF',
  logo: LogoDark,
  title: '#df7296',
  link: '#33c785',
  gradient: 'linear-gradient(90deg, #11998e 0%,#38ef7d 100% )',
};
