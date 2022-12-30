import React from "react";
import { MdSend } from "react-icons/md";
import styles from "../../style/components/HomeTab.module.scss";
const HomeTab = ({ setIsChatOpen }) => {
  return (
    <div className={styles.homeTab}>
      <div className={styles.homeTab_title}>
        <h2>
          <span>Hi there&nbsp; 👋</span>
          How can we help?
        </h2>
      </div>
      <div className={styles.sendMessageBox} onClick={setIsChatOpen}>
        <div className={styles.content}>
          <h6>Send us a message</h6>
          <p>We typically reply in under 15 minutes</p>
        </div>
        <div className={styles.icon}>
          <MdSend />
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
