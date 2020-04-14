import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';
import HerosIMG from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
      <div className="logon-container">
        <section className="form">
          <img src={logoImg} alt="logo" />
          <form>
            <h1>Faça seu logon</h1>
            <input placeholder="Sua ID" />
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