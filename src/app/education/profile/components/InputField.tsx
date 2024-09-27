import styles from "./inputfield.module.css";
interface Props {
  placeholder: string;
  isSensitive: boolean;
}

export default function InputField({ placeholder, isSensitive }: Props) {
  return (
    <>
      <input
        type={isSensitive ? "password" : "text"}
        className={styles.wrapper}
        value={placeholder}
        onChange={() => {}}
      />
    </>
  );
}
