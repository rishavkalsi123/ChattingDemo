import { useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import ChatBox from "./components/MainBox";
function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className="mainApp_wrapper open">
      {openModal && <ChatBox />}
      <button
        className="btn mainApp_button"
        onClick={() => setOpenModal(!openModal)}
      >
        {openModal ? <MdOutlineClose /> : <BiUpArrowAlt />}
      </button>
    </div>
  );
}
export default App;
