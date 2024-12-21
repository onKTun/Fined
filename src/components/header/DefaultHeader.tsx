"use client";
import Link from "next/link";
import styles from "./DefaultHeader.module.css";
import RoutingButton from "../ui/routingbutton/RoutingButton";
import ContactModal from "./components/contact/ContactModal";
import { useState } from "react";
import Logo from "../ui/logo/logo";
import { useSidebar } from "../sidebar/sidebarContext";

interface DefaultHeaderProps {
  loggedIn: boolean;
}

export default function DefaultHeader({ loggedIn }: DefaultHeaderProps) {
  const [activeModal, setActiveModal] = useState(null);
  const [isCooldownActive, setIsCooldownActive] = useState(false);
  const cooldownTime = 100;
  const { toggleSidebar } = useSidebar();
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
        <div
          className={styles.leftContainer}
          style={loggedIn ? { marginLeft: "3em" } : {}}
        >
          {loggedIn && <div></div>}
          <Logo></Logo>
          <ul className={styles.list}>
            <li
              onClick={() => {
                const orgEmail = "finedorganization@gmail.com";
                const subject = encodeURIComponent(
                  "Inquiry About Your Organization"
                );
                const body = encodeURIComponent(
                  "Hi, I’d like to know more about your services."
                );
                const mailtoLink = `mailto:${orgEmail}?subject=${subject}&body=${body}`;
                window.location.href = mailtoLink;
              }}
              className={styles.listItem}
            >
              Contact
            </li>

            <Link className={styles.listItem} href="/education/unitselector">
              Lessons
            </Link>
            <Link className={styles.listItem} href="/education/glossary">
              Glossary
            </Link>

            <Link
              className={styles.listItem}
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSe2Nso-1AMmFrIuUtVLgWfYpncfeDDi26WMt8gtaiTP294syA/viewform?usp=sf_link"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </Link>
            <li className={styles.listItem}>
              <form action="/auth/signout" method="post">
                <button className={styles.signout} type="submit">
                  Sign out
                </button>
              </form>
            </li>
          </ul>
        </div>
        <div className={styles.buttonContainer}>
          {loggedIn ? (
            <>
              <RoutingButton
                style={"blue"}
                text={"Dashboard"}
                ftSize={1}
                additonalStyles={{}}
                url={"/education/dashboard"}
              />
              <button
                onClick={toggleSidebar}
                className={styles.sideBarMinimizer}
              >
                <div className={styles.hamburgerPart}></div>
                <div className={styles.hamburgerPart}></div>
                <div className={styles.hamburgerPart}></div>
              </button>
            </>
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
