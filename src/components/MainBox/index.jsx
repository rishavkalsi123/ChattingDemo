import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BiMessageDetail } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import ChatView from "../Chat";
// import "../../style/index.scss";
import HomeTab from "../HomeTab";
import MessageTab from "../MessageTab";

const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="mainBox">
      {isChatOpen ? (
        <ChatView setIsChatOpen={setIsChatOpen} />
      ) : (
        <div className="mainBox_tabs">
          <Tabs defaultActiveKey="home" className="mainBox_tabList">
            <Tab
              eventKey="home"
              title={
                <>
                  <FaHome />
                  <span>Home</span>
                </>
              }
            >
              <HomeTab setIsChatOpen={setIsChatOpen} />
            </Tab>
            <Tab
              eventKey="message"
              title={
                <>
                  <BiMessageDetail />
                  <span>Messages</span>
                </>
              }
            >
              <MessageTab setIsChatOpen={setIsChatOpen} />
            </Tab>
            <Tab
              eventKey="help"
              title={
                <>
                  <FiHelpCircle />
                  <span>Help</span>
                </>
              }
            >
              <div className="dummy_text">
                <h4>Coming soon</h4>
              </div>
            </Tab>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
