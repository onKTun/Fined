"use client";
//import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";
interface Props {
  style: string;
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  ftSize: number;
  formAction?: (formData: FormData) => Promise<void>;
  heightWidth: React.CSSProperties;
  onClick?: () => void;
  arrow?: boolean;
}
export default function Button({
  style,
  text,
  onClick,
  formAction,
  type,
  ftSize = 1,
  heightWidth = { width: "fit-content", height: "fit-content" },
  arrow,
}: Props) {
  if (type === "submit") {
    return (
      <button
        onClick={onClick}
        type="submit"
        formAction={formAction}
        className={`${styles.wrapper} ${styles[style]}`}
        style={{
          fontSize: `${ftSize}rem`,
          width: heightWidth.width,
          height: heightWidth.height,
        }}
      >
        {text}
        {arrow && (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              d="M 14.222 16 C 14.719 16 15.141 15.828 15.484 15.484 C 15.828 15.141 16 14.719 16 14.222 L 16 1.778 C 16 1.303 15.828 0.891 15.484 0.534 C 15.141 0.178 14.719 0 14.222 0 L 6.222 0 C 5.747 0 5.338 0.178 4.994 0.534 C 4.65 0.891 4.478 1.306 4.478 1.778 L 4.478 3.556 L 6.222 3.556 L 6.222 1.778 L 14.222 1.778 L 14.222 14.222 L 6.222 14.222 L 6.222 11.556 L 4.478 11.556 L 4.478 14.222 C 4.478 14.719 4.65 15.141 4.994 15.484 C 5.338 15.828 5.747 16 6.222 16 Z M 8 4.088 L 8 6.222 L 0 6.222 L 0 8.888 L 8 8.888 L 8 11.022 L 11.556 7.572 Z"
              fill="rgb(255,255,255)"
            ></path>
          </svg>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.wrapper} ${styles[style]}`}
      style={{
        fontSize: `${ftSize}rem`,
        width: heightWidth.width,
        height: heightWidth.height,
      }}
    >
      {text}
      {arrow && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path
            d="M 14.222 16 C 14.719 16 15.141 15.828 15.484 15.484 C 15.828 15.141 16 14.719 16 14.222 L 16 1.778 C 16 1.303 15.828 0.891 15.484 0.534 C 15.141 0.178 14.719 0 14.222 0 L 6.222 0 C 5.747 0 5.338 0.178 4.994 0.534 C 4.65 0.891 4.478 1.306 4.478 1.778 L 4.478 3.556 L 6.222 3.556 L 6.222 1.778 L 14.222 1.778 L 14.222 14.222 L 6.222 14.222 L 6.222 11.556 L 4.478 11.556 L 4.478 14.222 C 4.478 14.719 4.65 15.141 4.994 15.484 C 5.338 15.828 5.747 16 6.222 16 Z M 8 4.088 L 8 6.222 L 0 6.222 L 0 8.888 L 8 8.888 L 8 11.022 L 11.556 7.572 Z"
            fill="rgb(255,255,255)"
          ></path>
        </svg>
      )}
    </button>
  );
}
