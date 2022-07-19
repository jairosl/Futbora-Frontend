import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import jogador from '../../assets/jogador.png';
import logo from '../../assets/logo.png';
import player from '../../assets/player.svg';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post('/session', { email, password });
      alert('Usuário encontrado seguir para a pagina de partidas');
    } catch (e: any) {
      if (e.response.status === 404) {
        alert('usuario não encontrado');
      }
      if (e.response.status === 400) {
        alert('email ou senha invalido');
      }
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>
          Faça login! <br /> E venha praticar esporte com o FutBora
        </h1>
        <div className={styles.imageContainer}>
          <img src={player} alt="tela de fundo " />
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.cardLogin} onSubmit={handleSubmit}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.textfield}>
            <label htmlFor="user">Usuário: </label>
            <input
              type="text"
              name="user"
              placeholder="Usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.textfield}>
            <label htmlFor="password">Senha: </label>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to={'/signUp'} className={styles.linkPassword}>
            <p>
              <a>Esqueceu sua senha? </a>
            </p>
          </Link>
          <button className={styles.btn} type="submit">
            Login
          </button>
          <Link to={'/signUp'} className={styles.link}>
            <p>
              <a>Criar conta</a>
            </p>
          </Link>
          <div className={styles.imageContainer}>
            <img src={jogador} alt="imagem Jogador" />
          </div>
        </form>
      </div>
    </div>
  );
}
