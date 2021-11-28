import Image from "next/image";
import styles from "./VendorCard.module.scss";
import Link from "next/link";

//TODO: tooltips
export default function VendorCard(props) {
  return (
    <Link href={`/vendors/${props.slug}`}>
      <div className={styles.vendorCard + " " + styles.backgroundWhite}>
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
