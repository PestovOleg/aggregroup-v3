import styles from "./LinkCard.module.scss";
import Link from "next/link";

export default function LinkCard(props) {
  /* const svgItem = function () {
    if (props.children) {
      return <div className={styles.svg}>{props.children}</div>;
    }
  }; */

  const dateBlock = () => {
    if (props.newsDate) {
      const dateOptions = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };

      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
      };
      const date = new Date(props.newsDate);
      return (
        <div className={styles.dateBlockWrapper}>
          <span>{date.toLocaleString("ru", dateOptions)}</span>
          <span>{date.toLocaleString("ru", timeOptions)}</span>
        </div>
      );
    }
  };

  return (
    <div className={styles.linkCard + " " + styles.wrapper}>
      {props.children}
      {dateBlock()}
      <div className={props.news ? styles.hLinkCardNews : styles.hLinkCard}>
        <strong>{props.caption}</strong>
      </div>

      <Link href={props.link} passHref>
        <a className={props.newsDate ? styles.hLinkNews : styles.hLink}>
          {props.newsDate ? "Читать новость" : "Подробнее"}
        </a>
      </Link>

      <div className={styles.linkCardBlock}></div>
    </div>
  );
}
