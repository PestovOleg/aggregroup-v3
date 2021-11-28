import styles from "../Icon.module.scss";

export default function Hamburger(props) {
  return (
    <svg
    className={`${props.cname}`}
      width="34"
      height="22"
      viewBox="0 0 34 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="34" height="4.88889" fill="#F2F2F2" />
      <rect y="8.55566" width="34" height="4.88889" fill="#F2F2F2" />
      <rect y="17.1108" width="34" height="4.88889" fill="#F2F2F2" />
    </svg>
  );
}
