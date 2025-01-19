"use client";
import { useState } from "react";
import styles from "./sidebar.module.css";
import SidebarNavButton from "./components/sidebarnavbutton/SidebarNavButton";
import DashboardSVG from "../../svg/sidebar/DashboardSVG";
import LessonSVG from "../../svg/sidebar/LessonSVG";
import GlossarySVG from "../../svg/sidebar/GlossarySVG";
import WorksheetSVG from "../../svg/sidebar/WorksheetSVG";
import FeedbackSVG from "../../svg/sidebar/FeedbackSVG";
import SettingsSVG from "../../svg/sidebar/SettingsSVG";
import LogoutSVG from "../../svg/sidebar/LogoutSVG";
import TempPFP from "../../svg/sidebar/TempPFP";
import SidebarProfileButton from "./components/sidebarprofilebutton/SidebarProfileButton";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useState(false);
  return (
    <section
      className={`${styles.container} ${isOpen ? styles.open : styles.closed}`}
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
    >
      <section className={styles.sectionWrapper}>
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
        <section className={styles.work}>
          <SidebarNavButton
            text={"Home"}
            svg={<DashboardSVG />}
            enabled={isOpen}
            selected={pathname === "/new/learn/dashboard"}
            link={"/new/learn/dashboard"}
          />
          <hr className={styles.line} />
          <SidebarNavButton
            text={"Lessons"}
            svg={<LessonSVG />}
            enabled={isOpen}
            selected={pathname === "/new/learn/unitselector"}
            link={"/new/learn/unitselector"}
          />
          <SidebarNavButton
            text={"Glossary"}
            svg={<GlossarySVG rgb="normal" />}
            enabled={isOpen}
            selected={pathname === "/new/learn/glossary"}
            link={"/new/learn/glossary"}
          />
          <SidebarNavButton
            text={"Worksheet"}
            svg={<WorksheetSVG />}
            enabled={isOpen}
            selected={false}
            link={""}
          />
          <hr className={styles.line} />
          <SidebarNavButton
            text={"User Guide"}
            svg={<GlossarySVG rgb="normal" />}
            enabled={isOpen}
            selected={false}
            link={""}
          />
          <SidebarNavButton
            text={"Resources"}
            svg={<WorksheetSVG />}
            enabled={isOpen}
            selected={false}
            link={""}
          />
        </section>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.work}>
          <SidebarNavButton
            text={"Signout"}
            svg={<LogoutSVG />}
            enabled={isOpen}
            selected={false}
            link={""}
          />
          <SidebarNavButton
            text={"Feedback"}
            svg={<FeedbackSVG />}
            enabled={isOpen}
            selected={false}
            link={""}
          />
          <SidebarNavButton
            text={"Settings"}
            svg={<SettingsSVG />}
            enabled={isOpen}
            selected={false}
            link={""}
          />
          <SidebarProfileButton
            username={"adamdarzidan"}
            email={"adamsandy38@gmail.com"}
            svg={<TempPFP />}
            enabled={isOpen}
            selected={false}
          />
        </div>
      </section>
    </section>
  );
}
