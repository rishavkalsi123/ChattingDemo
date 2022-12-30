import React from "react";
import { MdSend } from "react-icons/md";
import styles from "../../style/components/MessageTab.module.scss";
const MessageTab = ({ setIsChatOpen }) => {
  return (
    <div className={styles.messageTab}>
      <div className="tabContent_heading">
        <h5>Messages</h5>
      </div>
      <div className={styles.sendMessage_btn}>
        <button className="btn" onClick={() => setIsChatOpen(true)}>
          Send us a Message
          <span>
            <MdSend />
          </span>
        </button>
      </div>
    </div>
  );
};

export default MessageTab;
