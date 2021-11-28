import styles from "../Icon.module.scss";

export default function Facebook(props) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className={styles.iconSVGPathBlack}
        d="M32 16C32 24.8374 24.8374 32 16 32C7.16258 32 0 24.8374 0 16C0 7.16258 7.16258 0 16 0C24.8374 0 32 7.16258 32 16Z"
        fill="#1A242A"
      />
      <path
        d="M20.0266 16.606H17.1759V27.0826H12.8641V16.606H10.7972V12.9356H12.8641V10.5481C12.8641 8.83765 13.6837 6.20068 17.2115 6.20068H20.4186V9.76416H18.1024C17.7104 9.76416 17.1759 9.94233 17.1759 10.7619V12.9356H20.4186L20.0266 16.606Z"
        fill="white"
      />
    </svg>
  );
}
