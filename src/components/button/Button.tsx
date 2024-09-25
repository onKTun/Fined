"use client"
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
}
export default function Button({
  style,
  text,
  onClick,
  formAction,
  type,
  ftSize = 1,
  heightWidth = { width: "fit-content", height: "fit-content" },
}: Props) {
  

    if(type === "submit"){

      return( <button 
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
      </button>);
    }

return( <button 
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
</button>);
   
  
}
