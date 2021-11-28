import Image from "next/image";
import styles from "./ClientCard.module.scss";
import Link from "next/link";

//TODO: tooltips
export default function ClientCard(props) {
  return (
    <Link href={props.url}>
      <div className={styles.clientCard + " " + styles.backgroundWhite}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={props.src}
            layout="fill"
            objectPosition="center "
            objectFit="scale-down"
          />
        </div>
      </div>
    </Link>
  );
}
