import styles from "./Footer.module.scss";
import Link from "next/link";
import Icon from "../icon/icon";
import VK from "../icon/svg/vk";
import Twitter from "../icon/svg/twitter";
import Linkedin from "../icon/svg/linkedin";
import Facebook from "../icon/svg/facebook";
import Youtube from "../icon/svg/youtube";
import { useEffect, useState } from "react";

export default function Footer(props) {
  const [display, setDisplay] = useState(false);
  const [width, setWidth] = useState(0);

  const roll = () => {
    if (typeof window !== "undefined" && width < 720) {
      if (display) return styles.display;
      return styles.noneDisplay;
    }
    if (width < 720) return styles.noneDisplay;
  };
  if (typeof window !== "undefined") {
    useEffect(function onFirstMount() {
      setWidth(window.innerWidth);
      function onResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", null);
      };
    }, []);
  }

  return (
    <div className={styles.backgroundGreen + " " + styles.m0}>
      <div className={styles.container + " " + styles.footer}>
        <div className={styles.footerMenu}>
          <div
            className={
              styles.roll +
              " " +
              `${!display ? styles.rollDown : styles.rollUp}`
            }
            onClick={() => setDisplay(!display)}
          >
            {display ? "Свернуть" : "Развернуть"}
          </div>

          <div className={styles.footerSubMenu + " " + `${roll()}`}>
            <ul>
              <strong>Компания</strong>
              <li>
                <Link href="/">О нас</Link>
              </li>
              <li>
                <Link href="/">Новости</Link>
              </li>
              <li>
                <Link href="/">Блог</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSubMenu + " " + `${roll()}`}>
            <ul>
              <strong>Продукты</strong>
              <li>
                <Link href="/">ПО</Link>
              </li>
              <li>
                <Link href="/">Оборудование</Link>
              </li>
              <li>
                <Link href="/">Облака</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSubMenu + " " + `${roll()}`}>
            <ul>
              <strong>Услуги</strong>
              <li>
                <Link href="/">Техподдержка</Link>
              </li>
              <li>
                <Link href="/">ИТ-аутсорсинг</Link>
              </li>
              <li>
                <Link href="/">Безопасность</Link>
              </li>
              <li>
                <Link href="/">Инфраструктура</Link>
              </li>
              <li>
                <Link href="/">Проектная деятельность</Link>
              </li>
              <li>
                <Link href="/">Заказная разработка</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSubMenu}>
            <ul className={`${roll()}`}>
              <strong>Политика</strong>
              <li>
                <Link href="/">Информация о продавце</Link>
              </li>
              <li>
                <Link href="/">Политика конфиденциальности</Link>
              </li>
            </ul>
            <div className={styles.trSection + " " + styles.trSection2}></div>
            <div className={styles.iconWrapper}>
              <Icon className={styles.blockIcon}>
                <a href="https://vk.com" target="_blank">
                  <VK></VK>
                </a>
              </Icon>
              <Icon className={styles.blockIcon}>
                <a href="https://twitter.com" target="_blank">
                  <Twitter></Twitter>
                </a>
              </Icon>
              <Icon className={styles.blockIcon}>
                <a href="https://linkedin.com" target="_blank">
                  <Linkedin></Linkedin>
                </a>
              </Icon>
              <Icon className={styles.blockIcon}>
                <a href="https://facebook.com" target="_blank">
                  <Facebook></Facebook>
                </a>
              </Icon>
              <Icon className={styles.blockIcon}>
                <a href="https://youtube.com" target="_blank">
                  <Youtube></Youtube>
                </a>
              </Icon>
            </div>
          </div>
        </div>
        <div className={styles.trSection + " " + styles.trSection1}></div>
        <div className={styles.contactsWrapper}>
          <span className={styles.contact}>
            117312, Москва, ул Ферсмана 13к1
          </span>
          <span className={styles.phone}>
            <a href="tel:88002016692">8-800-201-66-92</a>
          </span>
          <span className={styles.phone}>
            <a href="mailto: info@aggregroup.com">info@aggregroup.com</a>
          </span>
        </div>
        <span className={styles.copyright}>&copy;2021 AggreGroup</span>
      </div>
    </div>
  );
}
