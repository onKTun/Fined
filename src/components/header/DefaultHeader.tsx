"use client";
import Link from "next/link";
import styles from "./DefaultHeader.module.css";
import Search from "../search/Search";
import RoutingButton from "../routingbutton/RoutingButton";
import ContactModal from "./components/contact/ContactModal";
import { useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import Logo from "../logo/logo";

interface DefaultHeaderProps {
  loggedIn: boolean;
}

export default function DefaultHeader({ loggedIn }: DefaultHeaderProps) {
  const [activeModal, setActiveModal] = useState(null);
  const [isCooldownActive, setIsCooldownActive] = useState(false);
  const cooldownTime = 100;

  // Open the modal when the user hovers
  const handleMouseEnter = (modalName) => {
    setActiveModal(modalName);
  };

  // Close the modal when the user leaves the hover area
  const handleMouseLeave = () => {
    if (!isCooldownActive) {
      setActiveModal(null);
      setIsCooldownActive(true);

      setTimeout(() => {
        setIsCooldownActive(false);
      }, cooldownTime);
    }
  };
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.leftContainer}>
          <Logo></Logo>
          <ul className={styles.list}>
            <li
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
              className={styles.listItem}
            >
              Contact
            </li>

            <Link className={styles.listItem} href="/education/unitselector">
              Lessons
            </Link>

            <li className={styles.listItem}>Feedback</li>
          </ul>
        </div>
        <div className={styles.buttonContainer}>
          <Search wid={"23em"} rad={5} color={""} />
          {loggedIn ? (
            <form action="/auth/signout" method="post">
              <button className="button block" type="submit">
                Sign out
              </button>
            </form>
          ) : (
            <>
              <RoutingButton
                style={"gray"}
                text={"Login"}
                ftSize={1}
                additonalStyles={{}}
                url={"/account/login"}
              />
              <RoutingButton
                style={"blue"}
                text={"Sign up"}
                ftSize={1}
                additonalStyles={{ width: "7em" }}
                url={"/account/signup"}
              />
            </>
          )}
          {loggedIn && (
            <RoutingButton
              style={"blue"}
              text={"Dashboard"}
              ftSize={1}
              additonalStyles={{}}
              url={"/education/dashboard"}
            />
          )}
        </div>
        <ContactModal
          isEnabled={activeModal == "contact"}
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
}
