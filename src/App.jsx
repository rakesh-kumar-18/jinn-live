import { useState } from "react";
import "./App.css";

const App = () => {
  const [customization, setCustomization] = useState({
    buttonIcon: "🙂",
    borderColor: "#000000",
    borderRadius: "12px",
    titleBgColor: "#000000",
    botBubbleBgColor: "#F1F1F1",
    botTextColor: "#000000",
    userBubbleBgColor: "#007BFF",
    userTextColor: "#FFFFFF",
    font: "Arial",
  });

  const handleChange = (key, value) => {
    setCustomization((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="app">
      {/* Customization Panel */}
      <div className="customization-panel">
        <h2>Customize Chatbot</h2>
        <label>
          Button Icon:
          <input
            type="text"
            value={customization.buttonIcon}
            onChange={(e) => handleChange("buttonIcon", e.target.value)}
          />
        </label>
        <label>
          Border Color:
          <input
            type="color"
            value={customization.borderColor}
            onChange={(e) => handleChange("borderColor", e.target.value)}
          />
        </label>
        <label>
          Border Radius:
          <input
            type="text"
            value={customization.borderRadius}
            onChange={(e) => handleChange("borderRadius", e.target.value)}
          />
        </label>
        <label>
          Chat Title Background Color:
          <input
            type="color"
            value={customization.titleBgColor}
            onChange={(e) => handleChange("titleBgColor", e.target.value)}
          />
        </label>
        <label>
          Bot Bubble Background Color:
          <input
            type="color"
            value={customization.botBubbleBgColor}
            onChange={(e) => handleChange("botBubbleBgColor", e.target.value)}
          />
        </label>
        <label>
          Bot Text Color:
          <input
            type="color"
            value={customization.botTextColor}
            onChange={(e) => handleChange("botTextColor", e.target.value)}
          />
        </label>
        <label>
          User Bubble Background Color:
          <input
            type="color"
            value={customization.userBubbleBgColor}
            onChange={(e) => handleChange("userBubbleBgColor", e.target.value)}
          />
        </label>
        <label>
          User Text Color:
          <input
            type="color"
            value={customization.userTextColor}
            onChange={(e) => handleChange("userTextColor", e.target.value)}
          />
        </label>
        <label>
          Text Font:
          <input
            type="text"
            value={customization.font}
            onChange={(e) => handleChange("font", e.target.value)}
          />
        </label>
      </div>

      {/* Chatbot Panel */}
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
          <button>{customization.buttonIcon}</button>
        </div>
      </div>
    </div>
  );
};

export default App;
