/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import HerosIMG from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
const [id,setId] = useState('');

  const history = useHistory();
  async function handleLogin(e){
    e.preventDefault();
    
    try{
      const response = await api.post('sessions',{id});
      console.log(response.data.name);
      localStorage.setItem('OngId',id);
      localStorage.setItem('OngName',response.data.name);
      history.push('/profile');
    }catch(err){
      alert("ID não encontrado");
    }
  }

    return (
      <div className="logon-container">
        <section className="form">
          <img src={logoImg} alt="logo" />
          <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>
            <input
              placeholder="Sua ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/register">
              <FiLogIn size="18" color="#E02041" />
              Não tenho Cadastro
            </Link>
          </form>
        </section>
        <img src={HerosIMG} alt="heroes" />
      </div>
    );
}