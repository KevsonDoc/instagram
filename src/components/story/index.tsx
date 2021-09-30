import {
  MouseEvent,
  useState,
} from 'react';

import styles from './styles.module.css';

const Story: React.FC = () => {
  const [ isDown, setIsDown ] = useState(false);
  const [ startX, setStartX ] = useState(0);
  const [ scrollLeft, setScrollLeft ] = useState(0);

  function downEvent(event: MouseEvent<HTMLUListElement>) {
    setIsDown(true);
    setStartX(event.pageX - event.currentTarget.offsetLeft);
    setScrollLeft(event.currentTarget.scrollLeft);
  }

  function leaveEevent(event: MouseEvent<HTMLUListElement>) {
    setIsDown(false);
  }

  function upEvent(event: MouseEvent<HTMLUListElement>) {
    setIsDown(false);
  }

  function moveEvent(event: MouseEvent<HTMLUListElement>) {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - event.currentTarget.offsetLeft;
    const walk = (x - startX) * 2.5;
    event.currentTarget.scrollLeft = scrollLeft - walk;
  }


  return (
    <section className={styles.container}>
      <div>
        <h1>Top Stories</h1>
        <a href="#">View All</a>
      </div>
      <ul
        onMouseDown={downEvent}
        onMouseLeave={leaveEevent}
        onMouseUp={upEvent}
        onMouseMove={moveEvent}
      >
        <li>
          <img
            src="https://cosmonerd.com.br//uploads/2020/02/Tanjiro-Demon-Slayer.jpg"
            alt="Tanjirō"
            draggable="false"
            className={styles.stories}
          />
          <a href="#" draggable="false">
            <img
              draggable="false"
              src="https://i.imgur.com/WP8cUWB.gif?noredirect"
              alt="Tanjirō"
              className={styles.profile_img}
            />
            Tanjirō
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="http://cdn.epicstream.com/assets/uploads/ckeditor/images/1624430726_Screen%20Shot%202021-06-23%20at%202_34_38%20PM.png"
            alt="stories"
            className={styles.stories}
          />
          <a draggable="false"  href="#litlle-profile">
            <img
              draggable="false"
              src="https://i.pinimg.com/originals/b6/24/7d/b6247df5b48692e6e7194511b917769c.gif"
              alt="Inosuke"
              className={styles.profile_img}
            />
            Inosuke
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="https://i.redd.it/bkiboip938f61.jpg"
            alt="Giyu Tomioka"
            className={styles.stories}
          />
          <a href="#litlle-profile" draggable="false">
            <img
              src="https://i.makeagif.com/media/9-27-2019/GbK6pV.gif"
              alt="Giyu Tomioka"
              draggable="false"
              className={styles.profile_img}
            />
            Giyu Tomioka
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="http://pm1.narvii.com/7424/56612dc126e9d5ffe2e7f29eed73903c3b1b9278r1-268-268v2_00.jpg"
            alt="Shinobu Kocho"
            className={styles.stories}
          />
          <a href="#litlle-profile" draggable="false">
            <img
              draggable="false"
              src="https://66.media.tumblr.com/6e5a33023e060a7455a91bfefdd96b24/tumblr_pwe80drR6D1snbyiqo1_540.gif"
              alt="Shinobu Kocho"
              className={styles.profile_img}
            />
            Shinobu Kocho
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="https://64.media.tumblr.com/58e06d80b2d24af056df1d137dd90c84/tumblr_pzokx6rm9P1r4jf9no3_540.gifv"
            alt="Kyojuro Rengoku"
            className={styles.stories}
          />
          <a href="#litlle-profile" draggable="false">
            <img
              draggable="false"
              src="https://64.media.tumblr.com/58e06d80b2d24af056df1d137dd90c84/tumblr_pzokx6rm9P1r4jf9no3_540.gifv"
              alt="Kyojuro Rengoku"
              className={styles.profile_img}
            />
            Kyojuro Rengoku
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="https://ovicio.com.br/wp-content/uploads/2021/06/20210603-mitsuri-kanroji-555x555.jpg"
            alt="Mitsuri Kanroji"
            className={styles.stories}
          />
          <a href="#litlle-profile" draggable="false">
            <img
              src="https://ovicio.com.br/wp-content/uploads/2021/06/20210603-mitsuri-kanroji-555x555.jpg"
              alt="Mitsuri Kanroji"
              draggable="false"
              className={styles.profile_img}
            />
            Mitsuri Kanroji
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="https://akibamarket.com/wp-content/uploads/2020/10/postrer-obanai-copia.jpg"
            alt="Obanai Iguro"
            className={styles.stories}
          />
          <a href="#litlle-profile" draggable="false">
            <img
              draggable="false"
              src="https://akibamarket.com/wp-content/uploads/2020/10/postrer-obanai-copia.jpg"
              alt="Obanai Iguro"
              className={styles.profile_img}
            />
            Obanai Iguro
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="https://www.anime-planet.com/images/characters/149222.jpg?t=1567362850"
            alt="Sanemi Shinazugawa"
            className={styles.stories}
          />
          <a href="#litlle-profile" draggable="false">
            <img
              draggable="false"
              src="https://www.anime-planet.com/images/characters/149222.jpg?t=1567362850"
              alt="Sanemi Shinazugawa"
              className={styles.profile_img}
            />
            Sanemi Shinazugawa
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="http://pm1.narvii.com/7310/a4d2162f7a6fbf5154967dcc6a2c3944e1ddabe2r1-394-393v2_00.jpg"
            alt="Gyomei Himejima"
            className={styles.stories}
          />
          <a href="#litlle-profile" draggable="false">
            <img
              draggable="false"
              src="http://pm1.narvii.com/7310/a4d2162f7a6fbf5154967dcc6a2c3944e1ddabe2r1-394-393v2_00.jpg"
              alt="Gyomei Himejima"
              className={styles.profile_img}
            />
            Gyomei Himejima
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="https://cdn.myanimelist.net/images/characters/14/390026.jpg"
            alt="Tengen Uzui"
            className={styles.stories}
          />
          <a href="#litlle-profile" draggable="false">
            <img
              draggable="false"
              src="https://cdn.myanimelist.net/images/characters/14/390026.jpg"
              alt="Tengen Uzui"
              className={styles.profile_img}
            />
            Tengen Uzui
          </a>
        </li>
        <li>
          <img
            draggable="false"
            src="https://44.media.tumblr.com/29d4d0ca1bd17a92da47c35518e23790/cca6b1eef5100432-1e/s540x810_f1/2dc3c777c2d3309be15faf273e5eb4b2b530f8a3.gifv"
            alt="Muichiro Tokito"
            className={styles.stories} />
          <a href="#litlle-profile" draggable="false">
            <img
              draggable="false"
              src="https://44.media.tumblr.com/29d4d0ca1bd17a92da47c35518e23790/cca6b1eef5100432-1e/s540x810_f1/2dc3c777c2d3309be15faf273e5eb4b2b530f8a3.gifv"
              alt="Muichiro Tokito"
              className={styles.profile_img}
            />
            Muichiro Tokito
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Story;