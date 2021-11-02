import styles from "./Menu.module.scss";
import Link from "next/link";

export default function Menu() {
  return (
    <ul className={styles.menuList + " " + styles.textColorWhite}>
      <li>
        <Link href="/ru">Программное обеспечение</Link>
      </li>
      <li>
        <Link href="/ru">Оборудование</Link>
      </li>
      <li>
        <Link href="/ru">Облака</Link>
      </li>
      <li>
        <Link href="/ru">Услуги</Link>
      </li>
      <li>
        <Link href="/ru">Новости</Link>
      </li>
    </ul>
  );
}
