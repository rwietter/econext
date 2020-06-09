import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';

import api from '../../services/api/api';

import Modal from '../../components/Modal/Modal';
import logo from '../../static/site/assets/logo.svg';
import DropzoneUpload from '../../components/dropzone/dropzone';

import '../../components/Modal/modal.css';
import * as S from './styles';

type Item = {
  id: number;
  title: string;
  image_url: string;
};

type GetInitialState = {
  sigla: string;
};

type GetCity = {
  nome: string;
};

const CollectPoint = () => {
  const [items, setItems] = useState<Item[]>([]); // items of database

  const [initialState, setInitialState] = useState<string[]>([]); // select initial state

  const [selectedState, setSelectedState] = useState<string>('0'); // selected state and get city of selected state
  const [city, setCity] = useState<string[]>([]); // add a new city

  const [selectedCity, setSelectedCity] = useState<string>('0'); // select city of selected state

  const [selectLocation, setSelectLocation] = useState<[number, number]>([0, 0]); // map marker
  const [initialLocation, setInitialLocation] = useState<[number, number]>([0, 0]); // initial location

  const [selectFileDropzone, setSelectFileDropzone] = useState<File>();

  // save data on database
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });
  const [selectItems, setSelectItems] = useState<number[]>([]);

  const [open, setOpen] = useState(false);

  function setModalClose() {
    setOpen(false);
  }

  useEffect(() => {
    api.get('items').then((response) => setItems(response.data));
  }, []);

  useEffect(() => {
    axios.get<GetInitialState[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`).then((response) => {
      const getInitialStateUf = response.data.map((uf) => uf.sigla);
      setInitialState(getInitialStateUf);
    });
  }, []);

  useEffect(() => {
    if (selectedState === '0') return;
    axios
      .get<GetCity[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState.toLowerCase()}/municipios`,
      )
      .then((response) => {
        const getCity = response.data.map((city) => city.nome);
        setCity(getCity);
      });
  }, [selectedState]);

  function handleSelectState(event: ChangeEvent<HTMLSelectElement>) {
    const getSelectedState = event.target.value;
    setSelectedState(getSelectedState);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    const getSelectedCity = event.target.value;
    setSelectedCity(getSelectedCity);
  }

  function handleClickMapLocation(event: LeafletMouseEvent) {
    setSelectLocation([event.latlng.lat, event.latlng.lng]);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setInitialLocation([latitude, longitude]);
    });
  }, []);

  // save input values
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (!e?.target.value) return;
    setInputData({ ...inputData, [name]: value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { name, email, whatsapp } = inputData;
    const uf = selectedState;
    const city = selectedCity;
    const [latitude, longitude] = selectLocation;
    const items = selectItems;

    const data = new FormData();

    const saveDataOnDatabase = (data: FormData) => {
      data.append('name', name);
      data.append('email', email);
      data.append('whatsapp', whatsapp);
      data.append('latitude', String(latitude));
      data.append('longitude', String(longitude));
      data.append('city', city);
      data.append('uf', uf);
      data.append('items', items.join(','));
      if (selectFileDropzone) {
        data.append('image', selectFileDropzone);
      } else {
        alert('Imagem não selecionada');
        return;
      }
    };

    saveDataOnDatabase(data);

    await api.post('points', data);
    if (name && email && whatsapp && uf && city && latitude && longitude && items) {
      setOpen(true);
    } else {
      // const submitError: Element | null = document.querySelector('.submit-error');
      // submitError?.append('Você não preencheu todos os campos');
      alert('Você não preencheu todos os campos');
    }
  }

  function handleSelectedItems(id: number) {
    const alreadySelected = selectItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const newUnselectedItems = selectItems.filter((item) => {
        return item !== id;
      });
      setSelectItems(newUnselectedItems);
    } else {
      setSelectItems([...selectItems, id]);
    }
  }

  return (
    <S.CreatePointDiv>
      <S.Header>
        <img src={logo} alt="logo do ecoleta" />
        <S.link to="/">
          <S.fiArrowLeft size={24} />
          <p style={{ fontSize: '1rem' }}>Voltar para a página de cadastro</p>
        </S.link>
      </S.Header>
      <S.form action="" onSubmit={handleSubmit}>
        <S.h1>Cadastro do</S.h1>
        <S.h1>ponto de coleta.</S.h1>

        <DropzoneUpload onFileUploader={setSelectFileDropzone} />

        <S.fieldset>
          <S.legend>
            <S.h2>Dados</S.h2>
          </S.legend>
          <S.field>
            <S.label htmlFor="entidade">Nome da entidade</S.label>
            <S.input autoComplete="none" name="name" id="name" onChange={handleInputChange} />
          </S.field>
          <S.fieldGroup>
            <S.field>
              <S.label htmlFor="email">E-mail</S.label>
              <S.input autoComplete="none" name="email" id="email" onChange={handleInputChange} />
            </S.field>
            <S.field>
              <S.label htmlFor="whatsapp">Whatsapp</S.label>
              <S.input autoComplete="none" name="whatsapp" id="whatsapp" onChange={handleInputChange} />
            </S.field>
          </S.fieldGroup>
        </S.fieldset>

        <S.fieldset>
          <S.legend>
            <S.h2>Endereço</S.h2>
            <S.span>Selecione o endereço no mapa abaixo</S.span>
          </S.legend>
          <S.leafletMap center={initialLocation} zoom={7} onclick={handleClickMapLocation}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectLocation} />
          </S.leafletMap>
          <S.fieldGroup>
            <S.field>
              <S.label htmlFor="uf" className="uf">
                Estado (UF)
              </S.label>
              <S.select name="uf" id="uf" value={selectedState} onChange={handleSelectState}>
                <option value="0">Selecione uma opção</option>
                {initialState.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </S.select>
            </S.field>
            <S.field>
              <S.label htmlFor="uf" className="uf">
                Cidade
              </S.label>
              <S.select name="city" id="city" onChange={handleSelectedCity}>
                <option value="0">Selecione uma cidade</option>
                {city.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </S.select>
            </S.field>
          </S.fieldGroup>
        </S.fieldset>
        <S.fieldset>
          <S.legend>
            <S.h2>Itens de coleta</S.h2>
            <S.span>Selecione um ou mais itens abaixo</S.span>
          </S.legend>
          <S.ulGrid>
            {items.map(({ id, image_url, title }) => (
              <S.liGrid
                className={selectItems.includes(id) ? 'selected' : ''}
                key={id}
                onClick={() => handleSelectedItems(id)}
              >
                <img src={image_url} alt="" />
                <S.spanGrid>{title}</S.spanGrid>
              </S.liGrid>
            ))}
          </S.ulGrid>
        </S.fieldset>
        <div>
          <div>
            <S.buttonIcon />
            <S.button type="submit">Cadastrar ponto de coleta</S.button>
          </div>
        </div>
      </S.form>
      <Link to="/">{open && <Modal isOpen={open} setClose={setModalClose} />}</Link>
    </S.CreatePointDiv>
  );
};
export default CollectPoint;
