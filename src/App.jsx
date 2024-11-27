import { useState } from "react";
import "./App.css";
import { IoMdSend } from "react-icons/io";
import { FaSnapchat } from "react-icons/fa";
import { SiChatwoot } from "react-icons/si";
import { AiFillWechatWork } from "react-icons/ai";
import { RiWechatChannelsLine } from "react-icons/ri";
import { SiChatbot } from "react-icons/si";

const App = () => {
  const [customization, setCustomization] = useState({
    buttonIcon: "snapchat",
    borderColor: "#000000",
    borderRadius: "12",
    titleBgColor: "#000000",
    botBubbleBgColor: "#F1F1F1",
    botTextColor: "#000000",
    userBubbleBgColor: "#000000",
    userTextColor: "#FFFFFF",
    font: "Arial",
  });

  const handleChange = (key, value) => {
    setCustomization((prev) => ({ ...prev, [key]: value }));
  };

  const iconMap = {
    snapchat: <FaSnapchat fontSize='xx-large' />,
    chatwoot: <SiChatwoot fontSize='xx-large' />,
    wechatWork: <AiFillWechatWork fontSize='xx-large' />,
    wechatChannels: <RiWechatChannelsLine fontSize='xx-large' />,
    chatbot: <SiChatbot fontSize='xx-large' />,
  };

  return (
    <div className="app">
      {/* Customization Section */}
      <div className="customization-panel">
        <h2>Customize Your Chatbot</h2>
        <div className="customization-grid">
          <div>
            <label>Button Icon:</label>
            <select
              value={customization.buttonIcon}
              onChange={(e) => handleChange("buttonIcon", e.target.value)}
            >
              <option value="snapchat">Snapchat (Default)</option>
              <option value="chatwoot">Chatwoot</option>
              <option value="wechatWork">Wechat Work</option>
              <option value="wechatChannels">Wechat Channels</option>
              <option value="chatbot">Chatbot</option>
            </select>
          </div>
          <div>
            <label>Border Color:</label>
            <input
              type="color"
              value={customization.borderColor}
              onChange={(e) => handleChange("borderColor", e.target.value)}
            />
          </div>
          <div>
            <label>Border Radius (px):</label>
            <input
              type="text"
              value={customization.borderRadius}
              onChange={(e) => handleChange("borderRadius", e.target.value)}
            />
          </div>
          <div>
            <label>Title Background Color:</label>
            <input
              type="color"
              value={customization.titleBgColor}
              onChange={(e) => handleChange("titleBgColor", e.target.value)}
            />
          </div>
          <div>
            <label>Bot Bubble Background:</label>
            <input
              type="color"
              value={customization.botBubbleBgColor}
              onChange={(e) => handleChange("botBubbleBgColor", e.target.value)}
            />
          </div>
          <div>
            <label>Bot Text Color:</label>
            <input
              type="color"
              value={customization.botTextColor}
              onChange={(e) => handleChange("botTextColor", e.target.value)}
            />
          </div>
          <div>
            <label>User Bubble Background:</label>
            <input
              type="color"
              value={customization.userBubbleBgColor}
              onChange={(e) => handleChange("userBubbleBgColor", e.target.value)}
            />
          </div>
          <div>
            <label>User Text Color:</label>
            <input
              type="color"
              value={customization.userTextColor}
              onChange={(e) => handleChange("userTextColor", e.target.value)}
            />
          </div>
          <div>
            <label>Text Font:</label>
            <select
              value={customization.font}
              onChange={(e) => handleChange("font", e.target.value)}
            >
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
              <option value="Courier New">Courier New</option>
            </select>
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <div
        className="chatbot-container"
        style={{
          borderColor: customization.borderColor,
          borderRadius: `${customization.borderRadius}px`,
          fontFamily: customization.font,
        }}
      >
        <div
          className="chat-title"
          style={{ backgroundColor: customization.titleBgColor }}
        >
          <span>{iconMap[customization.buttonIcon]}</span>
          <span style={{ marginLeft: '10px' }}>Jinn Live</span>
        </div>
        <div className="chat-messages">
          <div
            className="bot-message"
            style={{
              backgroundColor: customization.botBubbleBgColor,
              color: customization.botTextColor,
            }}
          >
            Hello Anurag! How can I help you today?
          </div>
          <div
            className="user-message"
            style={{
              backgroundColor: customization.userBubbleBgColor,
              color: customization.userTextColor,
            }}
          >
            Hello Jinn
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Ask us anything..." />
          <button>
            <IoMdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
