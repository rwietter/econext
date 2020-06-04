import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

import logo from '../../static/site/assets/logo.svg';
import './collectPoint.css';
import '../../components/Modal/modal.css';
import Modal from '../../components/Modal/Modal';

import api from '../../services/api/api';

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
    const data = {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    };
    // await api.post('points', data);
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
    <div id="page-create-point">
      <header>
        <img src={logo} alt="logo do ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          <p>Voltar para a página de cadastro</p>
        </Link>
      </header>
      <form action="" onSubmit={handleSubmit}>
        <h1>Cadastro do</h1>
        <h1>ponto de coleta.</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="entidade">Nome da entidade</label>
            <input type="text" autoComplete="none" name="name" id="name" onChange={handleInputChange} />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" autoComplete="none" name="email" id="email" onChange={handleInputChange} />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" autoComplete="none" name="whatsapp" id="whatsapp" onChange={handleInputChange} />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa abaixo</span>
          </legend>
          <Map center={initialLocation} zoom={8} onclick={handleClickMapLocation}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectLocation} />
          </Map>
          <div className="field-group">
            <div className="field">
              <label htmlFor="uf" className="uf">
                Estado (UF)
              </label>
              <select name="uf" id="uf" value={selectedState} onChange={handleSelectState}>
                <option value="0">Selecione uma opção</option>
                {initialState.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="uf" className="uf">
                Cidade
              </label>
              <select name="city" id="city" onChange={handleSelectedCity}>
                <option value="0">Selecione uma cidade</option>
                {city.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
          <ul className="items-grid">
            {items.map(({ id, image_url, title }) => (
              <li
                className={selectItems.includes(id) ? 'selected' : ''}
                key={id}
                onClick={() => handleSelectedItems(id)}
              >
                <img src={image_url} alt="" />
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </fieldset>
        <div>
          <div>
            <FiCheck className="form-button__ficheck" />
            <button type="submit">Cadastrar ponto de coleta</button>
          </div>
        </div>
      </form>
      {open && <Modal isOpen={open} setClose={setModalClose} />}
    </div>
  );
};
export default CollectPoint;
