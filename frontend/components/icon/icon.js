import styles from "./Icon.module.scss"

export default function Icon(props) {
  return (
    <span className={styles.icon +" "+`${props.className}`}>
      {props.children}
    </span>
  );
}
