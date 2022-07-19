import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import jogador from '../../assets/jogador.png';
import logo from '../../assets/logo.png';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('as senhas não são iguais');
      return;
    }
    try {
      await api.post('/users', {
        name,
        password,
        email,
      });
      navigate('/');
      alert('usuario criado com sucesso');
      return;
    } catch (e: any) {
      if (e.response.status === 400) {
        alert('Usuario já existe');
        return;
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <Link to={'/'}>
            <a>
              <FiArrowLeft size={30} style={{ position: 'absolute' }} />
            </a>
          </Link>
        </nav>
        <main className={styles.main}>
          <form className={styles.cardLogin} onSubmit={handleSubmit}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={styles.textfield}>
              <label htmlFor="user">Nome: </label>
              <input
                type="text"
                name="user"
                placeholder="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.textfield}>
              <label htmlFor="user">Email: </label>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
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
            <div className={styles.textfield}>
              <label htmlFor="password">Confirmar Senha: </label>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className={styles.btn} type="submit">
              Criar Conta
            </button>
            <div className={styles.imageContainer}>
              <img src={jogador} alt="imagem Jogador" />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
