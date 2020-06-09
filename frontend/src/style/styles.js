import BackgroundLight from '../static/site/assets/home-background.svg';
import BackgroundDark from '../static/site/assets/home-background-dark.svg';
import LogoLight from '../static/site/assets/logo.svg';
import LogoDark from '../static/site/assets/logo-dark.svg';
const Raleway = "@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');"

export const lightTheme = {
  Raleway,
  body: '#f0f0f5',
  text: '#322153',
  textBorred: '#626262',
  backgroundImage: BackgroundLight,
  toggleBorder: '#FFF',
  toggle: '#000',
  logo: LogoLight,
  title: '#c12b5c',
  link: '#33c785',
  primaryColor : '#34cb79',
  titleColor : '#322153',
  textColor: '#6c6c80',
  form: '#fff',
  dropzone: '#e1faec',
  textForm: '#626262',
  inputBackground: '#f5f5f5',
  inputText: '#6c6c80',
};

export const darkTheme = {
  Raleway,
  body: '#171719',
  text: '#FAFAFA',
  textBorred: '#cccccc',
  toggleBorder: '#6B8096',
  backgroundImage: BackgroundDark,
  toggle: '#FFF',
  logo: LogoDark,
  link: '#33c785',
  primaryColor: '#34cb79',
  titleColor: '#fafafa',
  textColor: '#6c6c80',
  form: '#252529',
  dropzone: '#34343a',
  textForm: '#fafafa',
  inputBackground: '#6c6c80',
  inputText: '#FFF',
};
