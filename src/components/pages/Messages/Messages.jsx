import { Link } from "react-router-dom";
import msg from "./message.module.css";
import { MessageData } from "./MessageData";
import { BiChevronRight } from "react-icons/bi";
import Navbar from "../../Header/Navbar";
import Side from "../../SideMenu/Side";
import "../../../App.css";

function Messages() {
  return (
    <div className="App">
      <Navbar />

      <div className="sideandpage">
        <Side />
        <div className="PageContent">
          <div>
            <div className={msg.messageNav}>
              <Link to="/dashboard">Home</Link>
              <BiChevronRight className={msg.icon} />
              <Link to="#">All messages</Link>
            </div>
            <div className={msg.usersListCon}>
              {MessageData.map((user) => (
                <Link
                  to={"/messages/user"}
                  key={user.id}
                  className={msg.userList}
                >
                  <img src={user.image} alt={user.name} className={msg.image} />
                  <div className={msg.userList_texts}>
                    <div className={msg.userList_text1}>
                      <h5>{user.name}</h5>
                      <p>{user.min}</p>
                    </div>
                    <div className={msg.text}>
                      <p>{user.chat}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
