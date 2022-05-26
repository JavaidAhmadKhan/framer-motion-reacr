import React from "react";
import { Scroll } from "framer";
import Card from './Card'
import ReactDOM from "react-dom";

import "./index.css";

// main App HOC
export const App = () => {
  return (
    <motion.div height={"100%"} width={"100%"} background={"#333"}>
      <motion.div width={375} height={"100%"} background={"#FFF"} center>
        <Scroll width={375} height={"100%"}>
          {/* Card component with props yPos,title,subtitle */}
          <Card
            yPos={48}
            title={"GEEKSFORGEEKS"}
            subtitle="Don't learn alone"
          />
          <Card
            yPos={48 + 300 + 24}
            title={"reactJS"}
            subtitle="Most starred JavaScript library"
          />
        </Scroll>
      </motion.div>
    </motion.div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
