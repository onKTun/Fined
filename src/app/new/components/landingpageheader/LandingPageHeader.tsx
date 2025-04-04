import Link from "next/link";
import styles from "./landingpageheader.module.css";
import Search from "../searchNew/Search";
import RedirectButton from "../buttonNew/RedirectButton";
export default function LandingPageHeader() {
  return (
    <section className={styles.container}>
      <div className={styles.leftElements}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="54" height="54" rx="5" fill="#F1F1F1" />
          <rect
            x="0.5"
            y="0.5"
            width="54"
            height="54"
            rx="4.5"
            stroke="black"
            stroke-opacity="0.1"
            stroke-dasharray="2 2"
          />
          <mask
            id="mask0_4904_8"
            maskUnits="userSpaceOnUse"
            x="14"
            y="27"
            width="7"
            height="11"
          >
            <path
              d="M14.6094 27.2864H20.9409V37.2981H14.6094V27.2864Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_4904_8)">
            <path
              d="M14.6094 27.1084V37.2672C14.6098 33.5032 21.0792 33.578 21.0792 33.578H26.537C28.4084 33.578 30.2049 32.2393 31.5387 29.8499L33.0692 27.1084H14.6094Z"
              fill="#3385FF"
            />
          </g>
          <mask
            id="mask1_4904_8"
            maskUnits="userSpaceOnUse"
            x="14"
            y="35"
            width="7"
            height="11"
          >
            <path
              d="M14.6094 35.2834H20.9409V45.8044H14.6094V35.2834Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_4904_8)">
            <path
              d="M14.6094 37.2672V45.8045L17.3511 44.274C19.7403 42.9403 21.0792 41.1437 21.0792 39.2723V35.7814C19.3545 35.2906 15.6104 34.5786 14.6094 37.2672Z"
              fill="#243D63"
            />
          </g>
          <mask
            id="mask2_4904_8"
            maskUnits="userSpaceOnUse"
            x="14"
            y="33"
            width="7"
            height="5"
          >
            <path
              d="M14.6094 33.5547H20.9409V37.2983H14.6094V33.5547Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask2_4904_8)">
            <path
              d="M14.6094 37.2675C15.6104 34.5789 19.3545 35.2909 21.0792 35.7817V33.5782C21.0792 33.5782 14.6098 33.5034 14.6094 37.2675Z"
              fill="#170049"
            />
          </g>
          <mask
            id="mask3_4904_8"
            maskUnits="userSpaceOnUse"
            x="28"
            y="17"
            width="12"
            height="7"
          >
            <path
              d="M28.0631 17.3884H39.9942V23.3039H28.0631V17.3884Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask3_4904_8)">
            <path
              d="M33.9278 23.3976H16.7834C16.7834 23.3976 16.7834 17.3884 22.8501 17.3884H39.9947L38.5729 19.9351C37.3345 22.154 35.6661 23.3976 33.9278 23.3976Z"
              fill="#3385FF"
            />
          </g>
          <mask
            id="mask4_4904_8"
            maskUnits="userSpaceOnUse"
            x="14"
            y="23"
            width="19"
            height="4"
          >
            <path
              d="M14.6094 23.1741H32.9718V26.2323H14.6094V23.1741Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask4_4904_8)">
            <path
              d="M14.4807 16.0261V26.185C14.4811 22.4209 20.9506 22.4957 20.9506 22.4957H26.4084C28.2797 22.4957 30.0763 21.157 31.41 18.7676L32.9406 16.0261H14.4807Z"
              fill="#3385FF"
            />
          </g>
          <mask
            id="mask5_4904_8"
            maskUnits="userSpaceOnUse"
            x="14"
            y="24"
            width="7"
            height="6"
          >
            <path
              d="M14.6094 24.2014H20.9702V29.3098H14.6094V24.2014Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask5_4904_8)">
            <path
              d="M14.4807 26.1847V34.722L17.2224 33.1915C19.6116 31.858 20.9506 30.0612 20.9506 28.1898V24.6989C19.2258 24.2081 15.4818 23.4961 14.4807 26.1847Z"
              fill="#3385FF"
            />
          </g>
          <mask
            id="mask6_4904_8"
            maskUnits="userSpaceOnUse"
            x="14"
            y="23"
            width="7"
            height="4"
          >
            <path
              d="M14.6094 23.1741H20.9702V26.2323H14.6094V23.1741Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask6_4904_8)">
            <path
              d="M14.4807 26.1847C15.4818 23.4961 19.2258 24.2081 20.9506 24.6989V22.4955C20.9506 22.4955 14.4811 22.4206 14.4807 26.1847Z"
              fill="#3385FF"
            />
          </g>
          <mask
            id="mask7_4904_8"
            maskUnits="userSpaceOnUse"
            x="28"
            y="28"
            width="6"
            height="6"
          >
            <path
              d="M28.137 28.5444H33.9627V33.5225H28.137V28.5444Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask7_4904_8)">
            <path
              d="M19.7251 28.5901V36.4212C19.7255 33.5195 24.7124 33.5774 24.7124 33.5774H28.9196C30.362 33.5774 31.7469 32.5453 32.7751 30.7036L33.9549 28.5901H19.7251Z"
              fill="#3385FF"
            />
          </g>
          <mask
            id="mask8_4904_8"
            maskUnits="userSpaceOnUse"
            x="14"
            y="17"
            width="11"
            height="7"
          >
            <path
              d="M14.6094 17.3298H24.2699V23.3087H14.6094V17.3298Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask8_4904_8)">
            <path
              d="M33.0692 23.8001H14.6094C14.6094 23.8001 14.6094 17.3298 21.1416 17.3298H39.6014L38.0709 20.072C36.7371 22.461 34.9408 23.8001 33.0692 23.8001Z"
              fill="#3385FF"
            />
          </g>
          <mask
            id="mask9_4904_8"
            maskUnits="userSpaceOnUse"
            x="20"
            y="28"
            width="5"
            height="6"
          >
            <path
              d="M20.813 28.5942H24.2725V33.5551H20.813V28.5942Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask9_4904_8)">
            <path
              d="M12.4476 28.4375V40.7159C12.4481 36.1665 20.2671 36.257 20.2671 36.257H26.8636C29.1253 36.257 31.2969 34.639 32.9088 31.751L34.7586 28.4375H12.4476Z"
              fill="#3385FF"
            />
          </g>
          <mask
            id="mask10_4904_8"
            maskUnits="userSpaceOnUse"
            x="24"
            y="14"
            width="4"
            height="18"
          >
            <path
              d="M24.4948 14.8909H27.7429V31.5352H24.4948V14.8909Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask10_4904_8)">
            <path
              d="M24.5125 31.5352V14.9231H27.7395V31.5352H24.5125Z"
              fill="#BDD7FF"
            />
          </g>
          <mask
            id="mask11_4904_8"
            maskUnits="userSpaceOnUse"
            x="21"
            y="7"
            width="10"
            height="9"
          >
            <path
              d="M21.9309 7.73438H30.3295V15.0565H21.9309V7.73438Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask11_4904_8)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.3139 15.0119L21.9374 14.9809L26.1524 7.73755L30.3139 15.0119Z"
              fill="#BDD7FF"
            />
          </g>
          <mask
            id="mask12_4904_8"
            maskUnits="userSpaceOnUse"
            x="24"
            y="27"
            width="4"
            height="16"
          >
            <path
              d="M24.4948 27.5134H27.7429V42.8529H24.4948V27.5134Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask12_4904_8)">
            <path
              d="M24.5125 42.8528V26.2407H27.7395V42.8528H24.5125Z"
              fill="#BDD7FF"
            />
          </g>
        </svg>
        <ul className={styles.hyperlinkWrapper}>
          <Link href="Content" className={styles.link}>
            Contact
          </Link>
          <Link href="Content" className={styles.link}>
            Lessons
          </Link>
          <Link href="Content" className={styles.link}>
            Glossary
          </Link>
          <Link href="Content" className={styles.link}>
            About Us
          </Link>
        </ul>
      </div>
      <div className={styles.rightElements}>
        <Search />
        <div className={styles.buttonContainer}>
          <RedirectButton
            text={"Log in"}
            styleType={"regular"}
            redirectURL="/new/login"
          />
          <RedirectButton
            text={"Sign Up"}
            styleType={"blue"}
            redirectURL="/new/login"
          />
        </div>
      </div>
    </section>
  );
}
