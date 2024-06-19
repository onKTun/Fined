import styles from "./LessonPreview.module.css";
import Breadcrumb from "/Users/adamdarziran/fined/src/components/breadcrumb/Breadcrumb";
import BlueButton from "../../components/blueButton/BlueButton";

function LessonPreview() {
  return (
    <section className={styles.lessonPreview}>
      <div className={styles.left}>
        <Breadcrumb />

        <h1 className={styles.unit}>Unit 1</h1>
        <h2 className={styles.lesson}>Value of Money</h2>
        <div className={styles.estimatedTime}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2911_9)">
              <path
                d="M1.81532 3.3704C1.21613 4.26554 0.866699 5.34201 0.866699 6.50003C0.866699 9.61126 3.38883 12.1334 6.50003 12.1334C9.61126 12.1334 12.1334 9.61126 12.1334 6.50003C12.1334 3.38883 9.61126 0.866699 6.50003 0.866699V2.74448M6.50003 6.50003L3.99633 3.99633"
                stroke="#858585"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2911_9">
                <rect width="13" height="13" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>This lesson is around 30 minutes long</p>
        </div>
        <div className={styles.subtitle}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.62484 1.0835H11.3748C11.5185 1.0835 11.6563 1.14056 11.7579 1.24215C11.8594 1.34373 11.9165 1.4815 11.9165 1.62516V11.3752C11.9165 11.5188 11.8594 11.6566 11.7579 11.7582C11.6563 11.8598 11.5185 11.9168 11.3748 11.9168H1.62484C1.48118 11.9168 1.3434 11.8598 1.24182 11.7582C1.14024 11.6566 1.08317 11.5188 1.08317 11.3752V1.62516C1.08317 1.4815 1.14024 1.34373 1.24182 1.24215C1.3434 1.14056 1.48118 1.0835 1.62484 1.0835ZM10.8332 2.16683H2.1665V3.25016H10.8332V2.16683ZM2.1665 10.8335H10.8332V4.3335H2.1665V10.8335ZM9.74984 6.50016C9.74984 6.3565 9.69277 6.21873 9.59119 6.11715C9.4896 6.01556 9.35183 5.9585 9.20817 5.9585H3.7915C3.64785 5.9585 3.51007 6.01556 3.40849 6.11715C3.30691 6.21873 3.24984 6.3565 3.24984 6.50016C3.24984 6.64382 3.30691 6.7816 3.40849 6.88318C3.51007 6.98476 3.64785 7.04183 3.7915 7.04183H9.20817C9.35183 7.04183 9.4896 6.98476 9.59119 6.88318C9.69277 6.7816 9.74984 6.64382 9.74984 6.50016ZM9.74984 8.66683C9.74984 8.52317 9.69277 8.3854 9.59119 8.28381C9.4896 8.18223 9.35183 8.12516 9.20817 8.12516H6.49984C6.35618 8.12516 6.2184 8.18223 6.11682 8.28381C6.01524 8.3854 5.95817 8.52317 5.95817 8.66683C5.95817 8.81049 6.01524 8.94826 6.11682 9.04985C6.2184 9.15143 6.35618 9.2085 6.49984 9.2085H9.20817C9.35183 9.2085 9.4896 9.15143 9.59119 9.04985C9.69277 8.94826 9.74984 8.81049 9.74984 8.66683Z"
              fill="#A5A5A5"
            />
          </svg>
          <p>Description</p>
        </div>
        <div className={styles.descriptionBox}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque platea ornare
            aliquet fermentum feugiat vitae facilisis massa lectus. Risus eget
            ullamcorper velit malesuada urna et. Faucibus faucibus dapibus
            egestas vel diam purus in tortor.
          </p>
        </div>
        <div className={styles.helpfulWrapper}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2889_76)">
              <path
                d="M4.92707 1.12273C5.2479 0.852318 5.76582 0.852318 6.07749 1.12273L6.80165 1.74148C6.93915 1.85607 7.2004 1.95232 7.38374 1.95232H8.1629C8.64874 1.95232 9.04749 2.35107 9.04749 2.8369V3.61607C9.04749 3.7994 9.14374 4.05607 9.25832 4.19357L9.87707 4.91771C10.1475 5.23854 10.1475 5.75646 9.87707 6.06813L9.25832 6.79229C9.14374 6.92979 9.04749 7.18646 9.04749 7.36979V8.14896C9.04749 8.63479 8.64874 9.03354 8.1629 9.03354H7.38374C7.2004 9.03354 6.94374 9.12979 6.80624 9.24438L6.08207 9.86313C5.76124 10.1335 5.24332 10.1335 4.93165 9.86313L4.20749 9.24438C4.06999 9.12979 3.80874 9.03354 3.62999 9.03354H2.8279C2.34207 9.03354 1.94332 8.63479 1.94332 8.14896V7.36521C1.94332 7.18646 1.85165 6.92521 1.73707 6.79229L1.11832 6.06354C0.852487 5.74729 0.852487 5.23396 1.11832 4.91771L1.73707 4.18898C1.85165 4.05148 1.94332 3.79482 1.94332 3.61607V2.84148C1.94332 2.35565 2.34207 1.9569 2.8279 1.9569H3.62082C3.80415 1.9569 4.06082 1.86065 4.19832 1.74607L4.92707 1.12273Z"
                stroke="#146BEC"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.5 3.72607V5.93982"
                stroke="#146BEC"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.49756 7.3335H5.50306"
                stroke="#146BEC"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2889_76">
                <rect width="11" height="11" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <a href="">Was this lesson helpful?</a>
        </div>

        <div className={styles.buttonRow}>
          <button type="button" className={styles.back}>
            Back
          </button>
          <BlueButton />
        </div>
      </div>
      <div className={styles.right}>
        <img
          src="../src/assets/profilepictures/image copy.png"
          width="450"
        ></img>
      </div>
    </section>
  );
}
export default LessonPreview;
