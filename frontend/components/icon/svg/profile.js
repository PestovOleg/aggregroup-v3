import styles from "../Icon.module.scss";

export default function Profile() {
  return (
    <svg
      className={styles.icon + " " + styles.iconMd}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.iconSVGPath}
        d="M46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23Z"
        fill="#1A242A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 22.9091C25.9823 22.9091 28.4 20.467 28.4 17.4545C28.4 14.4421 25.9823 12 23 12C20.0177 12 17.6 14.4421 17.6 17.4545C17.6 20.467 20.0177 22.9091 23 22.9091ZM31.3149 28.5211C31.7672 29.624 32 30.8062 32 32H23L14 32C14 30.8062 14.2328 29.624 14.6851 28.5211C15.1374 27.4181 15.8003 26.4159 16.636 25.5718C17.4718 24.7276 18.4639 24.058 19.5558 23.6011C20.6478 23.1442 21.8181 22.9091 23 22.9091C24.1819 22.9091 25.3522 23.1442 26.4442 23.6011C27.5361 24.058 28.5282 24.7276 29.364 25.5718C30.1997 26.4159 30.8626 27.4181 31.3149 28.5211Z"
        fill="white"
      />
    </svg>
  );
}
