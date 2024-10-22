import styles from "./sitemap.module.css";

interface Props {
  isEnabled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function Sitemap({
  isEnabled,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <div
      className={`${styles.container} ${isEnabled ? styles.show : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
          <div className={styles.title_svg}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Sitemap
        </div>
      </div>
    </div>
  );
}
