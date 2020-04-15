/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React,{useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link,useHistory } from 'react-router-dom';
import api from "../../services/api"

import "./styles.css";
import logoImg from '../../assets/logo.svg';

export default function Register(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [whatsapp,setWhatsapp] = useState('');
  const [city,setCity] = useState('');
  const [uf,setUf] = useState('');
  const [isOpen,setOpen] = useState(false);
  const [idUser,setIdUser] = useState('');

  const history = useHistory();

  function voltar(){
     history.push('/');
  }

  async function handleRegister(e){
    e.preventDefault();
    const data ={
      name,
      email,
      whatsapp,
      city,
      uf,}

      try{
        const response = await api.post('ongs',data);
        setIdUser(response.data.id);
        setOpen(true);
      // alert(`Seu ID de acesso:${response.data.id}`);
      // 
      }catch(err){
          
          alert('Erro no cadastro, tente novamente');
      }
     
  }

    return (
      <div className="register-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="" />
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem casos da sua ONG.
            </p>
            <Link className="back-link" to="/">
              <FiArrowLeft size="18" color="#E02041" />
              Voltar ao Logon
            </Link>
          </section>


          <form onSubmit={handleRegister}>
            <input
              placeholder="Nome da ONG"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
              <input
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                placeholder="UF"
                style={{ width: 80 }}
                value={uf}
                onChange={(e) => setUf(e.target.value)}
              />
            </div>

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
        {isOpen ? (
          <div className="modal">
            <div className="modal-content">
              <h1>Cadastro Realizado</h1>
              <div className="linhaid">
                <p>Seu ID de Acesso é:</p>
                <span>{idUser}</span>
              </div>

              <p>
                Guarde muito bem este ID, apenas com eles você poderá solicitar
                ajuda dos heróis.
              </p>
              <button className="button" type="submit" onClick={voltar}>
                Entendi, voltar ao Logon
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
}