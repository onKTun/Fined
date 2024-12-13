import React from "react";
import styles from "./modal.module.css";
import Button from "src/components/ui/button/Button";

interface Term {
  term: string;
  definition: string;
}

interface ModalProps {
  isOpen: boolean;
  term: Term | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, term, onClose }) => {
  if (!isOpen || !term) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.open : ""}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerLeft}>
            <div className={styles.svgWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M 12.653 11.415 C 12.653 12.881 11.466 14.068 10 14.068 C 8.534 14.068 7.347 12.881 7.347 11.415 C 7.347 9.949 8.534 8.762 10 8.762 C 11.466 8.762 12.653 9.949 12.653 11.415 Z M 18.082 4.766 C 19.142 4.766 20 5.624 20 6.684 L 20 15.973 C 20 17.103 19.084 18.018 17.955 18.018 L 2.045 18.018 C 0.916 18.018 0 17.103 0 15.973 L 0 6.684 C 0 5.624 0.858 4.766 1.918 4.766 L 5.754 4.766 L 5.934 4.002 C 6.209 2.819 7.265 1.982 8.48 1.982 L 11.524 1.982 C 12.739 1.982 13.795 2.819 14.07 4.002 L 14.246 4.766 Z M 4 7.534 C 4 7.004 3.569 6.573 3.039 6.573 C 2.505 6.573 2.074 7.004 2.074 7.534 C 2.074 8.064 2.505 8.495 3.035 8.495 C 3.569 8.499 4 8.068 4 7.534 Z M 14.731 11.415 C 14.731 8.803 12.612 6.684 10 6.684 C 7.388 6.684 5.269 8.803 5.269 11.415 C 5.269 14.027 7.388 16.146 10 16.146 C 12.612 16.146 14.731 14.027 14.731 11.415 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </svg>
            </div>
            Glossary Term
          </div>
          <button className={styles.infoButton} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M 20.49 3.52 C 15.807 -1.169 8.209 -1.174 3.52 3.509 C -1.169 8.193 -1.174 15.791 3.51 20.48 C 8.193 25.169 15.791 25.174 20.48 20.491 C 25.169 15.807 25.174 8.209 20.49 3.52 Z M 13.676 19.615 C 13.676 19.703 13.64 19.789 13.577 19.852 C 13.515 19.914 13.429 19.95 13.34 19.95 L 10.66 19.95 C 10.571 19.95 10.486 19.914 10.423 19.852 C 10.36 19.789 10.325 19.703 10.325 19.615 L 10.325 9.663 C 10.325 9.574 10.36 9.489 10.423 9.426 C 10.486 9.363 10.571 9.328 10.66 9.328 L 13.34 9.328 C 13.429 9.328 13.515 9.363 13.577 9.426 C 13.64 9.489 13.676 9.574 13.676 9.663 Z M 12 7.937 C 10.928 7.937 10.057 7.065 10.057 5.994 C 10.057 4.922 10.928 4.05 12 4.05 C 13.072 4.05 13.943 4.922 13.943 5.994 C 13.943 7.065 13.072 7.937 12 7.937 Z"
                fill="rgb(51, 133, 255)"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={styles.termPicture}
          style={{
            backgroundImage: "url(/assets/backgrounds/back.JPG)",
            backgroundSize: "cover",
          }}
        ></div>
        <div className={styles.boxWrapper}>
          Term
          <div className={styles.modalText}>{term.term}</div>
        </div>
        <div className={styles.boxWrapper}>
          Definition
          <div className={styles.modalText}>{term.definition}</div>
        </div>
        <Button
          onClick={onClose}
          text="Close"
          style="bluefill"
          ftSize={1.2}
          heightWidth={{}}
        />
      </div>
    </div>
  );
};

export default Modal;
