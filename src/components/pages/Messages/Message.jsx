import img1 from '../../../assets/user.jpg';
import img2 from '../../../assets/Avatar (3).png';
import msg from './message.module.css';
import { FaFile } from 'react-icons/fa';

const Message = ({ text, user = 'other', audioURL, fileURL }) => {
  const renderMessageContent = () => {
    if (audioURL) {
      return (
        <audio controls src={audioURL} />
      );
    } else if (fileURL) {
      return (
        <a href={fileURL} target="_blank" rel="noopener noreferrer">
          <FaFile />
          File
        </a>
      );
    } else {
      return <div>{text}</div>;
    }
  };

  return (
    <div className={`${msg.message01} ${user === 'me' ? msg.flexEnd : msg.flexStart}`}>
      {user === 'other' ? (
        <img src={img1} className={msg.avatar} alt="User Avatar" />
      ) : (
        <img src={img2} className={msg.avatar} alt="User Avatar" />
      )}
      <div className={msg.text_messages}>
        {renderMessageContent()}
      </div>
    </div>
  );
};

export default Message;
