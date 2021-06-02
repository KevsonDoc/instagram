import Link from 'next/link'
import styles from './styles/Sidebar.module.css'

const Sidebar = () => {
  return (
    <>
      <aside className={styles.containerAside}>
        <section className={styles.containerLogoInstagram}>
          <img src="logo.png" alt="Instagram" className={styles.logo} />
          <img src="logoInstagram.png" alt="Instagram" className={styles.logoName} />
        </section>
        <section className={styles.avatar}>
          <div>
            <img src="https://avatars.githubusercontent.com/u/55449539?v=4" alt="Kevson Filipe" />
          </div>
          <h1>Kevson Filipe</h1>
          <h2>@KFI</h2>
        </section>
        <section className={styles.containerFolow}>
          <div>
            <h3>Posts</h3>
            <span>76</span>
          </div>
          <div />
          <div>
            <h3>Followers</h3>
            <span>500</span>
          </div>
          <div />
          <div>
            <h3>Following</h3>
            <span>241</span>
          </div>
        </section>
        <p>
          Desenvolvedor de software,
          Técnico em Informática e admirador do melhor
          da Ciência e Tecnologia.
        </p>
        <div className={styles.horizon} />
        <section className={styles.navigation}>
          <span>
            <Link href="#">
              <a className={styles.isFocus}>
                <div className={styles.isPage} /> <img src="/casa.svg" alt="feed" />Feed
              </a>
            </Link>
          </span>
          <span>
            <Link href="#">
              <a className={styles.link}>
                <img src="/explorar.svg" alt="Explore" />Explore
              </a>
            </Link>
          </span>
          <span>
            <Link href="#">
              <a className={styles.link}>
                <img src="/heart.svg" alt="Activity" />Activity
              </a>
            </Link>
          </span>
          <span>
            <Link href="#">
              <a className={styles.link}>
                <img src="/user.svg" alt="Follow Requests" /> Follow Requests
              </a>
            </Link>
          </span>
          <span>
            <Link href="#">
              <a className={styles.link}>
                <img src="/hashtag.svg" alt="Popular Tags" />Popular Tags
              </a>
            </Link>
          </span>
          <span>
            <Link href="#">
              <a className={styles.link}>
                <img src="/settings.svg" alt="Settings" />Settings
              </a>
            </Link>
          </span>
        </section>
        <sapan className={styles.horizon_two} ><div /></sapan>
        <span>
          <Link href="#">
            <a className={styles.logout}>
              <img src="/logout.svg" alt="Logout" />Logout
            </a>
          </Link>
        </span>
      </aside>
    </>
  )
}

export default Sidebar;