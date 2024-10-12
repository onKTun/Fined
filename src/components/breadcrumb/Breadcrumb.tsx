import styles from "./breadcrumb.module.css";
interface Props {
  unit: string;
  lesson: string;
}

export default function Breadcrumb({ unit, lesson }: Props) {
  const limit = 13;
  const stringConvert = (word: string) => {
    if (word.length > limit) return word.substring(0, limit - 3) + "...";
    else return word;
  };
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path
            d="M 10.002 0.667 L 5.998 0.667 L 5.998 3.864 L 10.002 3.864 Z M 11.102 0.667 L 11.102 3.864 L 15.238 3.864 C 14.864 1.847 13.375 0.674 11.102 0.667 Z M 0.667 4.964 L 0.667 11.073 C 0.667 13.742 2.258 15.333 4.927 15.333 L 11.073 15.333 C 13.742 15.333 15.333 13.742 15.333 11.073 L 15.333 4.964 Z M 9.789 11.065 L 8.264 11.945 C 7.941 12.129 7.626 12.224 7.333 12.224 C 7.113 12.224 6.915 12.173 6.731 12.07 C 6.306 11.828 6.071 11.329 6.071 10.684 L 6.071 8.924 C 6.071 8.279 6.306 7.78 6.731 7.538 C 7.157 7.289 7.699 7.333 8.264 7.663 L 9.789 8.543 C 10.354 8.865 10.662 9.32 10.662 9.811 C 10.662 10.303 10.347 10.735 9.789 11.065 Z M 4.897 0.667 C 2.624 0.674 1.135 1.847 0.761 3.864 L 4.897 3.864 Z"
            fill="rgb(186, 186, 186)"
          ></path>
        </svg>
        {stringConvert(unit)}
      </li>
      <li
        className={styles.item}
        style={{
          borderLeft: "1px solid var(--inputborder)",
          borderRight: "1px solid var(--inputborder)",
        }}
      >
        ...
      </li>
      <li className={styles.item}>{stringConvert(lesson)}</li>
    </ul>
  );
}
