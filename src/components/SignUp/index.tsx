import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import jogador from '../../assets/jogador.png';
import logo from '../../assets/logo.png';
import styles from './styles.module.scss';
export function SignUp() {
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
          <form className={styles.cardLogin}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={styles.textfield}>
              <label htmlFor="user">Usuário: </label>
              <input type="text" name="user" placeholder="Usuário" />
            </div>
            <div className={styles.textfield}>
              <label htmlFor="user">Email: </label>
              <input type="email" name="email" placeholder="E-mail" />
            </div>
            <div className={styles.textfield}>
              <label htmlFor="password">Senha: </label>
              <input type="password" name="password" placeholder="Senha" />
            </div>
            <div className={styles.textfield}>
              <label htmlFor="password">Confirmar Senha: </label>
              <input type="password" name="password" placeholder="Senha" />
            </div>
            <button className={styles.btn}>Criar Conta</button>
            <div className={styles.imageContainer}>
              <img src={jogador} alt="imagem Jogador" />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
