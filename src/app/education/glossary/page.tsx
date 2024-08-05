"use client";
import styles from "./glossary.module.css";
//import { useSidebar } from "../../../components/sidebar/sidebarContext"; commented out since unused
import Search from "src/components/search/Search";
import Letterbox from "./components/letterbox/Letterbox";

export default function Glossary() {
  return (
    <>
      <div className={styles.bodyDash}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerTop}>
            <div className={styles.pageIndicator}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                <path
                  d="M 20.167 4.446 L 20.167 15.345 C 20.167 16.234 19.442 17.05 18.553 17.16 L 18.269 17.197 C 16.766 17.398 14.648 18.022 12.943 18.737 C 12.347 18.984 11.687 18.535 11.687 17.884 L 11.687 5.133 C 11.687 4.794 11.88 4.482 12.182 4.317 C 13.86 3.41 16.399 2.603 18.122 2.457 L 18.177 2.457 C 19.277 2.457 20.167 3.346 20.167 4.446 Z M 9.816 4.317 C 8.138 3.41 5.599 2.603 3.876 2.457 L 3.811 2.457 C 2.711 2.457 1.822 3.346 1.822 4.446 L 1.822 15.345 C 1.822 16.234 2.546 17.05 3.436 17.16 L 3.72 17.197 C 5.223 17.398 7.341 18.022 9.046 18.737 C 9.642 18.984 10.302 18.535 10.302 17.884 L 10.302 5.133 C 10.304 4.792 10.117 4.478 9.816 4.317 Z M 4.582 7.095 L 6.644 7.095 C 7.024 7.095 7.332 7.403 7.332 7.782 C 7.332 8.162 7.024 8.47 6.644 8.47 L 4.582 8.47 C 4.202 8.47 3.894 8.162 3.894 7.782 C 3.894 7.403 4.202 7.095 4.582 7.095 Z M 7.332 11.22 L 4.582 11.22 C 4.202 11.22 3.894 10.912 3.894 10.532 C 3.894 10.153 4.202 9.845 4.582 9.845 L 7.332 9.845 C 7.711 9.845 8.019 10.153 8.019 10.532 C 8.019 10.912 7.711 11.22 7.332 11.22 Z"
                  fill="rgb(255, 255, 255)"
                ></path>
              </svg>
              Glossary
            </div>
            <p className={styles.bannerTitle}>
              FIN'ED© Introduction to Finance
            </p>
            <p className={styles.bannerText}>
              You can search, read, and learn any terms within that is mentioned
              within the website here.
            </p>
          </div>
          <div className={styles.searchWrapper}>
            <Search rad={30} wid="45em" color="white" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <Letterbox
            letter="A"
            terms={[
              "Asset",
              "Amortization",
              "Annuity",
              "Arbitrage",
              "Appreciation",
            ]}
          />
          <Letterbox
            letter="B"
            terms={["Balance Sheet", "Bonds", "Bear Market", "Broker"]}
          />
          <Letterbox
            letter="C"
            terms={["Capital", "Collateral", "Commodities", "Credit"]}
          />
          <Letterbox
            letter="D"
            terms={[
              "Dividend",
              "Depreciation",
              "Debt",
              "Derivatives",
              "Dow Jones Industrial Average (DJIA)",
            ]}
          />
          <Letterbox
            letter="A"
            terms={[
              "Asset",
              "Amortization",
              "Annuity",
              "Arbitrage",
              "Appreciation",
            ]}
          />
          <Letterbox
            letter="B"
            terms={["Balance Sheet", "Bonds", "Bear Market", "Broker"]}
          />
          <Letterbox
            letter="C"
            terms={["Capital", "Collateral", "Commodities", "Credit"]}
          />
          <Letterbox
            letter="D"
            terms={[
              "Dividend",
              "Depreciation",
              "Debt",
              "Derivatives",
              "Dow Jones Industrial Average (DJIA)",
            ]}
          />
          <Letterbox
            letter="A"
            terms={[
              "Asset",
              "Amortization",
              "Annuity",
              "Arbitrage",
              "Appreciation",
            ]}
          />
          <Letterbox
            letter="B"
            terms={["Balance Sheet", "Bonds", "Bear Market", "Broker"]}
          />
          <Letterbox
            letter="C"
            terms={["Capital", "Collateral", "Commodities", "Credit"]}
          />
          <Letterbox
            letter="D"
            terms={[
              "Dividend",
              "Depreciation",
              "Debt",
              "Derivatives",
              "Dow Jones Industrial Average (DJIA)",
            ]}
          />
        </div>
      </div>
    </>
  );
}
