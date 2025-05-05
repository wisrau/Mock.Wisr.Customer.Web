import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

import "./index.css";

const main = document.createElement("main");
document.body.appendChild(main);

const logger = document.createElement("pre");
logger.style.backgroundColor = "black";
logger.style.color = "#0F0";
logger.style.position = "fixed";
logger.style.bottom = "10px";
logger.style.right = "10px";
logger.style.width = "300px";
logger.style.padding = "10px 10px 10px 30px";
logger.style.fontSize = "16px";
logger.style.textWrapMode = "wrap";

document.body.appendChild(logger);
const realLogger = console.log;
console.log = (...messages: any[]) => {
  realLogger(...messages);
  const copy =document.createTextNode(
    messages
      .map((m) => (typeof m === "object" ? JSON.stringify(m, undefined, 2) : m))
      .join(" | ")
    );

  const message = document.createElement("div");
  message.style.display = "list-item";
  message.style.listStyle = "square";
  message.appendChild(copy);

  logger.appendChild(message);
};

const root = createRoot(main);
root.render(<App />);
