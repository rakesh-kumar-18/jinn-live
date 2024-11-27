import { useState } from "react";
import "./App.css";
import { IoMdSend } from "react-icons/io";

const App = () => {
  const [customization, setCustomization] = useState({
    buttonIcon: "🙂",
    borderColor: "#000000",
    borderRadius: "12px",
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

  return (
    <div className="app">
      {/* Customization Section */}
      <div className="customization-panel">
        <h2>Customize Your Chatbot</h2>
        <div className="customization-grid">
          <div>
            <label>Button Icon:</label>
            <input
              type="text"
              value={customization.buttonIcon}
              onChange={(e) => handleChange("buttonIcon", e.target.value)}
            />
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
            <label>Border Radius:</label>
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
            <input
              type="text"
              value={customization.font}
              onChange={(e) => handleChange("font", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <div
        className="chatbot-container"
        style={{
          borderColor: customization.borderColor,
          borderRadius: customization.borderRadius,
          fontFamily: customization.font,
        }}
      >
        <div
          className="chat-title"
          style={{ backgroundColor: customization.titleBgColor }}
        >
          <span>{customization.buttonIcon} Jinn Live</span>
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
