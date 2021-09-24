import styles from './style.module.css';

const SuportBar: React.FC = () => {
  return (
    <header className={styles.seach}>
      <div>
        <a href="/#">
          <img src="/icon/search.svg" alt="pesquisar por contatos, seguidores, hashtags" />
        </a>
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <a href="#">
          <img src="/icon/camera.svg" alt="camera" />
        </a>
        <a href="#">
          <img src="/icon/tv.svg" alt="camera" />
        </a>
        <a href="#">
          <img src="/icon/send.svg" alt="camera" />
        </a>
        <a href="#" className={styles.ancor_styles}>
          <img src="/icon/plus.svg" alt="camera" />
          <p>Create Post</p>
        </a>
      </div>
    </header>
  )
}

export default SuportBar;