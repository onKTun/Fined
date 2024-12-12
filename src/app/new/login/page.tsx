"use client";
import { useState } from "react";
import styles from "./login.module.css";
import Checkbox from "src/components/checkbox/Checkbox";
import Link from "next/link";

export default function Login() {
  const [buttonToggled, setButton] = useState(0);
  const [selectMode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!selectMode);
  };

  const toggleButton = (button: number) => {
    button === buttonToggled ? setButton(0) : setButton(button);
  };

  return (
    <section className={styles.container}>
      <section className={styles.header}>
        {" "}
        <div className={styles.login_header_svgContainer}>
          <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_3887_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="18"
              width="6"
              height="10"
            >
              <path d="M0 18.4888H5.98728V27.9561H0V18.4888Z" fill="white" />
            </mask>
            <g mask="url(#mask0_3887_7)">
              <path
                d="M0 18.3206V27.927C0.000406691 24.3676 6.11804 24.4384 6.11804 24.4384H11.2791C13.0487 24.4384 14.7476 23.1725 16.0088 20.913L17.4561 18.3206H0Z"
                fill="#3385FF"
              />
            </g>
            <mask
              id="mask1_3887_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="26"
              width="6"
              height="10"
            >
              <path d="M0 26.051H5.98728V35.9999H0V26.051Z" fill="white" />
            </mask>
            <g mask="url(#mask1_3887_7)">
              <path
                d="M0 27.9271V36.0002L2.59262 34.5529C4.85193 33.2917 6.11804 31.5928 6.11804 29.8232V26.5221C4.4871 26.058 0.946633 25.3847 0 27.9271Z"
                fill="#243D63"
              />
            </g>
            <mask
              id="mask2_3887_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="24"
              width="6"
              height="4"
            >
              <path d="M0 24.4163H5.98728V27.9563H0V24.4163Z" fill="white" />
            </mask>
            <g mask="url(#mask2_3887_7)">
              <path
                d="M0 27.9272C0.946633 25.3848 4.4871 26.0581 6.11804 26.5222V24.4386C6.11804 24.4386 0.000406691 24.3678 0 27.9272Z"
                fill="#170049"
              />
            </g>
            <mask
              id="mask3_3887_7"
              maskUnits="userSpaceOnUse"
              x="12"
              y="9"
              width="13"
              height="6"
            >
              <path
                d="M12.7217 9.12915H24.004V14.7229H12.7217V9.12915Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask3_3887_7)">
              <path
                d="M18.2678 14.8116H2.05566C2.05566 14.8116 2.05566 9.12915 7.79241 9.12915H24.0047L22.6603 11.5373C21.4892 13.6356 19.9115 14.8116 18.2678 14.8116Z"
                fill="#3385FF"
              />
            </g>
            <mask
              id="mask4_3887_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="14"
              width="18"
              height="4"
            >
              <path d="M0 14.6003H17.364V17.4923H0V14.6003Z" fill="white" />
            </mask>
            <g mask="url(#mask4_3887_7)">
              <path
                d="M-0.12207 7.84082V17.4473C-0.121664 13.8879 5.99597 13.9587 5.99597 13.9587H11.157C12.9266 13.9587 14.6255 12.6927 15.8867 10.4332L17.334 7.84082H-0.12207Z"
                fill="#3385FF"
              />
            </g>
            <mask
              id="mask5_3887_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="15"
              width="7"
              height="6"
            >
              <path d="M0 15.5715H6.01493V20.4021H0V15.5715Z" fill="white" />
            </mask>
            <g mask="url(#mask5_3887_7)">
              <path
                d="M-0.12207 17.4471V25.5202L2.47055 24.0729C4.72986 22.8119 5.99597 21.1128 5.99597 19.3432V16.0421C4.36503 15.578 0.824563 14.9047 -0.12207 17.4471Z"
                fill="#3385FF"
              />
            </g>
            <mask
              id="mask6_3887_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="14"
              width="7"
              height="4"
            >
              <path d="M0 14.6003H6.01493V17.4923H0V14.6003Z" fill="white" />
            </mask>
            <g mask="url(#mask6_3887_7)">
              <path
                d="M-0.12207 17.447C0.824563 14.9046 4.36503 15.5779 5.99597 16.042V13.9584C5.99597 13.9584 -0.121664 13.8876 -0.12207 17.447Z"
                fill="#3385FF"
              />
            </g>
            <mask
              id="mask7_3887_7"
              maskUnits="userSpaceOnUse"
              x="12"
              y="19"
              width="7"
              height="6"
            >
              <path
                d="M12.792 19.6785H18.301V24.3858H12.792V19.6785Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask7_3887_7)">
              <path
                d="M4.83789 19.7214V27.1267C4.8383 24.3828 9.55398 24.4375 9.55398 24.4375H13.5325C14.8964 24.4375 16.206 23.4616 17.1783 21.72L18.2939 19.7214H4.83789Z"
                fill="#3385FF"
              />
            </g>
            <mask
              id="mask8_3887_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="9"
              width="10"
              height="6"
            >
              <path d="M0 9.07373H9.13527V14.7275H0V9.07373Z" fill="white" />
            </mask>
            <g mask="url(#mask8_3887_7)">
              <path
                d="M17.4561 15.1922H0C0 15.1922 0 9.07373 6.17701 9.07373H23.6331L22.1858 11.6668C20.9246 13.9259 19.2259 15.1922 17.4561 15.1922Z"
                fill="#3385FF"
              />
            </g>
            <mask
              id="mask9_3887_7"
              maskUnits="userSpaceOnUse"
              x="5"
              y="19"
              width="5"
              height="6"
            >
              <path
                d="M5.86621 19.7258H9.13764V24.4169H5.86621V19.7258Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask9_3887_7)">
              <path
                d="M-2.04492 19.5771V31.1879C-2.04452 26.8859 5.34939 26.9715 5.34939 26.9715H11.5872C13.7259 26.9715 15.7794 25.4414 17.3036 22.7105L19.0529 19.5771H-2.04492Z"
                fill="#3385FF"
              />
            </g>
            <mask
              id="mask10_3887_7"
              maskUnits="userSpaceOnUse"
              x="9"
              y="6"
              width="4"
              height="17"
            >
              <path
                d="M9.34766 6.76733H12.4192V22.5067H9.34766V6.76733Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask10_3887_7)">
              <path
                d="M9.36426 22.5069V6.7981H12.4159V22.5069H9.36426Z"
                fill="#BDD7FF"
              />
            </g>
            <mask
              id="mask11_3887_7"
              maskUnits="userSpaceOnUse"
              x="6"
              y="0"
              width="9"
              height="7"
            >
              <path d="M6.92285 0H14.8648V6.92395H6.92285V0Z" fill="white" />
            </mask>
            <g mask="url(#mask11_3887_7)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8507 6.88173L6.92969 6.85245L10.9155 0.00292969L14.8507 6.88173Z"
                fill="#BDD7FF"
              />
            </g>
            <mask
              id="mask12_3887_7"
              maskUnits="userSpaceOnUse"
              x="9"
              y="18"
              width="4"
              height="16"
            >
              <path
                d="M9.34766 18.7036H12.4192V33.209H9.34766V18.7036Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask12_3887_7)">
              <path
                d="M9.36426 33.2086V17.4998H12.4159V33.2086H9.36426Z"
                fill="#BDD7FF"
              />
            </g>
          </svg>
        </div>
        <div className={styles.login_header_buttonContainer}>
          <button className={`${styles.headerButton} ${styles.gray}`}>
            Sign up
          </button>
          <button className={`${styles.headerButton} ${styles.blue}`}>
            Log in
          </button>
        </div>
      </section>
      <section className={styles.bottomContainer}>
        <div className={styles.login_contentContainer}>
          <section className={styles.login_container}>
            <div className={styles.login_header}>
              <div className={styles.login_header_svgContainer}>
                <svg
                  width="24"
                  height="36"
                  viewBox="0 0 24 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="18"
                    width="6"
                    height="10"
                  >
                    <path
                      d="M0 18.4888H5.98728V27.9561H0V18.4888Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_3887_7)">
                    <path
                      d="M0 18.3206V27.927C0.000406691 24.3676 6.11804 24.4384 6.11804 24.4384H11.2791C13.0487 24.4384 14.7476 23.1725 16.0088 20.913L17.4561 18.3206H0Z"
                      fill="#3385FF"
                    />
                  </g>
                  <mask
                    id="mask1_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="26"
                    width="6"
                    height="10"
                  >
                    <path
                      d="M0 26.051H5.98728V35.9999H0V26.051Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_3887_7)">
                    <path
                      d="M0 27.9271V36.0002L2.59262 34.5529C4.85193 33.2917 6.11804 31.5928 6.11804 29.8232V26.5221C4.4871 26.058 0.946633 25.3847 0 27.9271Z"
                      fill="#243D63"
                    />
                  </g>
                  <mask
                    id="mask2_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="24"
                    width="6"
                    height="4"
                  >
                    <path
                      d="M0 24.4163H5.98728V27.9563H0V24.4163Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask2_3887_7)">
                    <path
                      d="M0 27.9272C0.946633 25.3848 4.4871 26.0581 6.11804 26.5222V24.4386C6.11804 24.4386 0.000406691 24.3678 0 27.9272Z"
                      fill="#170049"
                    />
                  </g>
                  <mask
                    id="mask3_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="12"
                    y="9"
                    width="13"
                    height="6"
                  >
                    <path
                      d="M12.7217 9.12915H24.004V14.7229H12.7217V9.12915Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask3_3887_7)">
                    <path
                      d="M18.2678 14.8116H2.05566C2.05566 14.8116 2.05566 9.12915 7.79241 9.12915H24.0047L22.6603 11.5373C21.4892 13.6356 19.9115 14.8116 18.2678 14.8116Z"
                      fill="#3385FF"
                    />
                  </g>
                  <mask
                    id="mask4_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="14"
                    width="18"
                    height="4"
                  >
                    <path
                      d="M0 14.6003H17.364V17.4923H0V14.6003Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask4_3887_7)">
                    <path
                      d="M-0.12207 7.84082V17.4473C-0.121664 13.8879 5.99597 13.9587 5.99597 13.9587H11.157C12.9266 13.9587 14.6255 12.6927 15.8867 10.4332L17.334 7.84082H-0.12207Z"
                      fill="#3385FF"
                    />
                  </g>
                  <mask
                    id="mask5_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="15"
                    width="7"
                    height="6"
                  >
                    <path
                      d="M0 15.5715H6.01493V20.4021H0V15.5715Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask5_3887_7)">
                    <path
                      d="M-0.12207 17.4471V25.5202L2.47055 24.0729C4.72986 22.8119 5.99597 21.1128 5.99597 19.3432V16.0421C4.36503 15.578 0.824563 14.9047 -0.12207 17.4471Z"
                      fill="#3385FF"
                    />
                  </g>
                  <mask
                    id="mask6_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="14"
                    width="7"
                    height="4"
                  >
                    <path
                      d="M0 14.6003H6.01493V17.4923H0V14.6003Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask6_3887_7)">
                    <path
                      d="M-0.12207 17.447C0.824563 14.9046 4.36503 15.5779 5.99597 16.042V13.9584C5.99597 13.9584 -0.121664 13.8876 -0.12207 17.447Z"
                      fill="#3385FF"
                    />
                  </g>
                  <mask
                    id="mask7_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="12"
                    y="19"
                    width="7"
                    height="6"
                  >
                    <path
                      d="M12.792 19.6785H18.301V24.3858H12.792V19.6785Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask7_3887_7)">
                    <path
                      d="M4.83789 19.7214V27.1267C4.8383 24.3828 9.55398 24.4375 9.55398 24.4375H13.5325C14.8964 24.4375 16.206 23.4616 17.1783 21.72L18.2939 19.7214H4.83789Z"
                      fill="#3385FF"
                    />
                  </g>
                  <mask
                    id="mask8_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="9"
                    width="10"
                    height="6"
                  >
                    <path
                      d="M0 9.07373H9.13527V14.7275H0V9.07373Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask8_3887_7)">
                    <path
                      d="M17.4561 15.1922H0C0 15.1922 0 9.07373 6.17701 9.07373H23.6331L22.1858 11.6668C20.9246 13.9259 19.2259 15.1922 17.4561 15.1922Z"
                      fill="#3385FF"
                    />
                  </g>
                  <mask
                    id="mask9_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="5"
                    y="19"
                    width="5"
                    height="6"
                  >
                    <path
                      d="M5.86621 19.7258H9.13764V24.4169H5.86621V19.7258Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask9_3887_7)">
                    <path
                      d="M-2.04492 19.5771V31.1879C-2.04452 26.8859 5.34939 26.9715 5.34939 26.9715H11.5872C13.7259 26.9715 15.7794 25.4414 17.3036 22.7105L19.0529 19.5771H-2.04492Z"
                      fill="#3385FF"
                    />
                  </g>
                  <mask
                    id="mask10_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="9"
                    y="6"
                    width="4"
                    height="17"
                  >
                    <path
                      d="M9.34766 6.76733H12.4192V22.5067H9.34766V6.76733Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask10_3887_7)">
                    <path
                      d="M9.36426 22.5069V6.7981H12.4159V22.5069H9.36426Z"
                      fill="#BDD7FF"
                    />
                  </g>
                  <mask
                    id="mask11_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="6"
                    y="0"
                    width="9"
                    height="7"
                  >
                    <path
                      d="M6.92285 0H14.8648V6.92395H6.92285V0Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask11_3887_7)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8507 6.88173L6.92969 6.85245L10.9155 0.00292969L14.8507 6.88173Z"
                      fill="#BDD7FF"
                    />
                  </g>
                  <mask
                    id="mask12_3887_7"
                    maskUnits="userSpaceOnUse"
                    x="9"
                    y="18"
                    width="4"
                    height="16"
                  >
                    <path
                      d="M9.34766 18.7036H12.4192V33.209H9.34766V18.7036Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask12_3887_7)">
                    <path
                      d="M9.36426 33.2086V17.4998H12.4159V33.2086H9.36426Z"
                      fill="#BDD7FF"
                    />
                  </g>
                </svg>
              </div>
              <div
                className={`${styles.login_changeModeButton_expand} ${
                  selectMode ? styles.login_changeModeButton_expandTrue : ""
                }`}
              >
                <button
                  onClick={toggleMode}
                  className={`${styles.login_changeModeButton} ${
                    selectMode ? styles.toggledButton : ""
                  }`}
                >
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transition:
                        "0.2s all cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                    }}
                  >
                    <path
                      d="M9.71257 8.4C10.5097 8.4 11.1607 9.02682 11.1983 9.81496L11.2 9.88704V10.15C11.2 11.4644 10.5204 12.4484 9.47793 13.0831C8.45281 13.7072 7.07486 14 5.6 14C4.12513 14 2.74719 13.7072 1.72207 13.0831C0.711175 12.4676 0.0415201 11.5237 0.00186319 10.2686L0 10.15V9.88712C0 9.08962 0.627532 8.43928 1.41541 8.40171L1.48746 8.4H9.71257ZM5.6 0C7.53298 0 9.1 1.567 9.1 3.5C9.1 5.43298 7.53298 7 5.6 7C3.66702 7 2.1 5.43298 2.1 3.5C2.1 1.567 3.66702 0 5.6 0Z"
                      fill={selectMode ? "rgba(0,0,0,0.25)" : "#FFD365"}
                    />
                  </svg>
                  Sign up
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={
                      selectMode
                        ? {
                            transform: "rotate(180deg)",
                            transition:
                              "0.1s all cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                          }
                        : {
                            transition:
                              "0.3s all cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                          }
                    }
                  >
                    <g clip-path="url(#clip0_3883_532)">
                      <path
                        d="M14.214 3.36825C13.9655 3.11978 13.5626 3.11973 13.3141 3.3683L7.40054 9.28194L1.48673 3.36825C1.23825 3.11978 0.835303 3.11973 0.586782 3.3683C0.33826 3.61682 0.33826 4.01972 0.586782 4.26824L6.95059 10.6319C7.06993 10.7512 7.23178 10.8182 7.40054 10.8182C7.5693 10.8182 7.73119 10.7512 7.85049 10.6318L14.214 4.2682C14.4625 4.01972 14.4625 3.61678 14.214 3.36825Z"
                        fill={selectMode ? "rgba(0,0,0,0.25)" : "#FFD365"}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3883_532">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.400391)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  onClick={toggleMode}
                  className={`${styles.login_changeModeButton} ${
                    selectMode ? styles.toggledButton : ""
                  } ${styles.login_changeModeButtonOther} ${
                    selectMode ? styles.login_changeModeButtonOtherTrue : ""
                  }`}
                >
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.71257 8.4C10.5097 8.4 11.1607 9.02682 11.1983 9.81496L11.2 9.88704V10.15C11.2 11.4644 10.5204 12.4484 9.47793 13.0831C8.45281 13.7072 7.07486 14 5.6 14C4.12513 14 2.74719 13.7072 1.72207 13.0831C0.711175 12.4676 0.0415201 11.5237 0.00186319 10.2686L0 10.15V9.88712C0 9.08962 0.627532 8.43928 1.41541 8.40171L1.48746 8.4H9.71257ZM5.6 0C7.53298 0 9.1 1.567 9.1 3.5C9.1 5.43298 7.53298 7 5.6 7C3.66702 7 2.1 5.43298 2.1 3.5C2.1 1.567 3.66702 0 5.6 0Z"
                      fill={"rgba(0,0,0,0.25)"}
                    />
                  </svg>
                  Log In
                </button>
              </div>
            </div>
            <div className={styles.login_textHeader}>
              <label className={styles.login_textHeader_title}>
                Hello, Welcome Back
              </label>
              Please enter your details below
            </div>
            <div className={styles.login_signUpWith_container}>
              Sign up with
              <div className={styles.login_signUpWith_buttons}>
                <button
                  className={`${styles.login_signUpWith_buttonContainer} ${
                    buttonToggled === 1
                      ? styles.login_signUpWith_buttonSelected
                      : ""
                  }`}
                  type="button"
                  onClick={() => toggleButton(1)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M11.9997 23.0001C14.9697 23.0001 17.4597 22.0201 19.2797 20.3401L15.7097 17.5701C14.7297 18.2301 13.4797 18.6301 11.9997 18.6301C9.13969 18.6301 6.70969 16.7001 5.83969 14.1001H2.17969V16.9401C3.98969 20.5301 7.69969 23.0001 11.9997 23.0001Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.0901C5.62 13.4301 5.49 12.7301 5.49 12.0001C5.49 11.2701 5.62 10.5701 5.84 9.91007V7.07007H2.18C1.43 8.55007 1 10.2201 1 12.0001C1 13.7801 1.43 15.4501 2.18 16.9301L5.03 14.7101L5.84 14.0901Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M11.9997 5.38C13.6197 5.38 15.0597 5.94 16.2097 7.02L19.3597 3.87C17.4497 2.09 14.9697 1 11.9997 1C7.69969 1 3.98969 3.47 2.17969 7.07L5.83969 9.91C6.70969 7.31 9.13969 5.38 11.9997 5.38Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
                <button
                  className={`${styles.login_signUpWith_buttonContainer} ${
                    buttonToggled === 2
                      ? styles.login_signUpWith_buttonSelected
                      : ""
                  }`}
                  type="button"
                  onClick={() => toggleButton(2)}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3883_426)">
                      <path d="M0 0H8.57143V8.57143H0V0Z" fill="#F35325" />
                      <path
                        d="M9.42871 0H18.0001V8.57143H9.42871V0Z"
                        fill="#81BC06"
                      />
                      <path
                        d="M0 9.42847H8.57143V17.9999H0V9.42847Z"
                        fill="#05A6F0"
                      />
                      <path
                        d="M9.42871 9.42847H18.0001V17.9999H9.42871V9.42847Z"
                        fill="#FFBA08"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3883_426">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Microsoft
                </button>
              </div>
            </div>
            <div className={styles.login_orSignUpWith}>
              <label
                className={styles.login_orSignUpWithLabel}
                htmlFor="orSignUpWith"
              >
                or sign up with
              </label>
              <hr className={styles.line} />
            </div>
            <div className={styles.login_signUpWith_container}>
              <div className={styles.login_textInput_title}>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3883_434)">
                    <path
                      d="M2.59277 3.23808L8.33351 7.66661C9.3212 8.42851 10.6792 8.42851 11.6668 7.66661L17.4076 3.23804"
                      stroke="#838383"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.4818 1.33325H3.51884C2.49609 1.33325 1.66699 2.18604 1.66699 3.23801V12.7618C1.66699 13.8138 2.49609 14.6666 3.51884 14.6666H16.4818C17.5046 14.6666 18.3337 13.8138 18.3337 12.7618V3.23801C18.3337 2.18604 17.5046 1.33325 16.4818 1.33325Z"
                      stroke="#838383"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3883_434">
                      <rect width="20" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Enter your email
              </div>
              <input
                type="email"
                className={styles.textInput}
                placeholder="Please enter your email..."
              ></input>
            </div>
            <div className={styles.login_signUpWith_container}>
              <div className={styles.login_textInput_title}>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3883_434)">
                    <path
                      d="M2.59277 3.23808L8.33351 7.66661C9.3212 8.42851 10.6792 8.42851 11.6668 7.66661L17.4076 3.23804"
                      stroke="#838383"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.4818 1.33325H3.51884C2.49609 1.33325 1.66699 2.18604 1.66699 3.23801V12.7618C1.66699 13.8138 2.49609 14.6666 3.51884 14.6666H16.4818C17.5046 14.6666 18.3337 13.8138 18.3337 12.7618V3.23801C18.3337 2.18604 17.5046 1.33325 16.4818 1.33325Z"
                      stroke="#838383"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3883_434">
                      <rect width="20" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Enter your password
              </div>
              <input
                type="email"
                className={styles.textInput}
                placeholder="Please enter your password..."
              ></input>
              <div className={styles.login_extra}>
                <div className={styles.login_rememberMeWrapper}>
                  <Checkbox />
                  Remember me
                </div>
                <div className={styles.forgotPasswordText}>
                  <Link
                    href="/account/forgotpassword"
                    className="highlightedText"
                  >
                    <label htmlFor="forgotPassword">
                      Forgot your password?
                    </label>
                  </Link>
                </div>
              </div>
            </div>
            <button type="button" className={styles.button}>
              Sign in
            </button>
          </section>
          <div className={styles.img}></div>
        </div>
      </section>
    </section>
  );
}
