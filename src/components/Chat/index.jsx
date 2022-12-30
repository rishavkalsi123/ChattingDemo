/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import profileImg from "../../assets/profile.png";
import styles from "../../style/components/Chat.module.scss";

const ChatView = ({ setIsChatOpen }) => {
  const scrollArea = useRef();
  const [value, setValue] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [boatMessages, setBoatMessage] = useState({});

  const boatMessage = {
    type: 2,
    message: "Hey there, we will get back to you soon",
  };
  const handleChatInput = (e) => {
    setValue(e.target.value);
  };
  const scrollToBottom = () => {
    scrollArea.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSendMessage = () => {
    let list = [...allMessages];
    if (value) {
      list.push({ type: 1, message: value });
      setAllMessages(list);
      setValue("");
      setBoatMessage(boatMessage);
    }
  };

  useEffect(() => {
    if (Object.keys(boatMessages).length !== 0) {
      setTimeout(() => {
        let list = [...allMessages];
        list.push(boatMessage);
        setAllMessages(list);
        setBoatMessage({});
      }, 1500);
    }
    scrollToBottom();
  }, [boatMessages]);

  return (
    <div className={styles.chatView}>
      <div className={styles.chat_header}>
        <span className={styles.backBtn} onClick={() => setIsChatOpen(false)}>
          <BsFillArrowLeftCircleFill />
        </span>
        <div>
          <h5>Chatting</h5>
        </div>
      </div>
      <div className={styles.message_area}>
        <div className={styles.message_list}>
          {allMessages.length
            ? allMessages.map((item, index) => (
                <div
                  className={`${styles.singleMessage} ${
                    item.type === 2 ? styles.boatMessage : ""
                  }`}
                  key={index}
                >
                  {item.type === 2 && (
                    <span className={styles.img}>
                      <img src={profileImg} alt="profile" />
                    </span>
                  )}
                  <span className={styles.message}>{item.message}</span>
                </div>
              ))
            : ""}
          <div ref={scrollArea} />
        </div>
      </div>
      <div className={styles.message_field}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <input
            type="text"
            value={value}
            placeholder="write a reply"
            onChange={handleChatInput}
          />
          <button className={styles.icon} type="submit">
            <MdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatView;
