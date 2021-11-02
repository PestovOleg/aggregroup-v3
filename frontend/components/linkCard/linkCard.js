import styles from "./LinkCard.module.scss";
import Link from "next/dist/client/link";

export default function LinkCard(props) {
  const svgItem=function() {
    if(props.children){return (<div className={styles.svg}>{props.children}</div>)} 
  }
  
  return (
    <div className={styles.linkCard + " " + styles.wrapper}>
      {svgItem()}
      <div className={styles.caption + " " + styles.hLinkCard}>
        <strong>{props.caption}</strong>
      </div>
      <Link href={props.link}>
        <a>Подробнее</a>
      </Link>
      <div className={styles.linkCardBlock}></div>
    </div>
  );
}
