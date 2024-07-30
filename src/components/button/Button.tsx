import styles from "./button.module.css";
interface Props {
  text: string;
}
function Button({ text }: Props) {
  return (
    <>
      <button className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={styles.svg}
        >
          <path
            d="M 17.777 20 C 18.398 20 18.926 19.785 19.355 19.355 C 19.785 18.926 20 18.398 20 17.777 L 20 2.223 C 20 1.629 19.785 1.113 19.355 0.668 C 18.926 0.223 18.398 0 17.777 0 L 7.777 0 C 7.184 0 6.672 0.223 6.242 0.668 C 5.813 1.113 5.598 1.633 5.598 2.223 L 5.598 4.445 L 7.777 4.445 L 7.777 2.223 L 17.777 2.223 L 17.777 17.777 L 7.777 17.777 L 7.777 14.445 L 5.598 14.445 L 5.598 17.777 C 5.598 18.398 5.813 18.926 6.242 19.355 C 6.672 19.785 7.184 20 7.777 20 Z M 10 5.109 L 10 7.777 L 0 7.777 L 0 11.109 L 10 11.109 L 10 13.777 L 14.445 9.465 Z"
            fill="rgb(255,255,255)"
          ></path>
        </svg>
        <p className={styles.button_text}>{text}</p>
      </button>
    </>
  );
}
export default Button;
