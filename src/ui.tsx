import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import * as bricksLogo from "../assets/bricks-logo.png";

const UI = () => {
  const [isComponentSelected, setIsComponentSelected] = useState(false);

  onmessage = async (event: MessageEvent) => {
    const pluginMessage = event.data.pluginMessage;
    if (pluginMessage.type === "selection-change") {
      setIsComponentSelected(pluginMessage.isComponentSelected);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-start items-center">
      <div className="flex justify-between items-center w-full h-[88px] bg-gray-800 mb-6 px-6">
        <div className="font-be-vietnam-pro text-xl min-w-[248px] whitespace-nowrap text-white text-opacity-100 leading-none tracking-normal font-bold">
          Welcome to Bricks
        </div>
        <img
          width="49px"
          height="48.1px"
          src={bricksLogo.default}
          alt="Bricks Logo"
        />
      </div>
      <div className="p-6">
        <div>
          <p className="font-vietnam text-black font-bold text-lg mb-4">
            Select a component to get started
          </p>
          <p className="font-vietnam italic text-sm text-gray-400">
            {isComponentSelected
              ? "Components selected"
              : "No components selected"}
          </p>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("react-page"));

root.render(<UI />);
