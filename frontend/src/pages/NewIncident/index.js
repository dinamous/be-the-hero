import React, {useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link,useHistory } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function NewIncident() {
  const [title,setTile] = useState('');
  const [description,setDescription] = useState('');
  const [value,setValue] = useState('');

  // eslint-disable-next-line no-undef
  const ongId = localStorage.getItem('OngId');
  const history = useHistory();

  async function handleNewIncident(e){
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    }

    try{
      await api.post('incidents',data,{
        headers:{
          Authorization: ongId
        }
      });
      history.push('/profile');
    }catch(err){
      alert("erro ao tentar cadastrar caso");
    }
  }


  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size="18" color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
          placeholder="Título do caso"
          value={title}
          onChange={(e)=> setTile(e.target.value)} />

          <textarea 
          placeholder="Descrição" 
          value={description}
          onChange={(e)=> setDescription(e.target.value)}/>

          <input 
          placeholder="Valor em reais"
          value={value}
          onChange={(e)=> setValue(e.target.value)} />

          
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
