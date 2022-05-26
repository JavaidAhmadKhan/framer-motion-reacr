import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Frame, Scroll, useAnimation } from "framer";

// Card component with destructured props :
// yPos, title, subtitle
const Card = ({ yPos, title, subtitle }) => {
  // useState hook to manage the state of
  // expanding of card
  const [state, setState] = useState(false);

  // utility function to handle
  // onTap on card component
  const handleTap = () => {
    state ? controls.start({ y: 0 }) : setState(!state);
  };

  const controls = useAnimation();

  // Variants allow you to define animation
  // states and organise them by name.
  // They allow you to control animations
  // throughout a component
  // tree by switching a single animate prop.
  const variants = {
    active: {
      width: 320,
      height: 800,
      borderRadius: 0,
      overflow: "visible",
      left: 28,
      right: 0,
      y: 0,
      transition: { duration: 0.125, type: "spring", damping: 10, mass: 0.6 },
    },
    inactive: {
      width: 280,
      height: 280,
      borderRadius: 24,
      overflow: "hidden",
      left: 45,
      y: yPos,
      transition: { duration: 0.125, type: "spring", damping: 10, mass: 0.6 },
    },
  };

  return (
    // basic container for layout, styling,
    // animation and events.
    <motion.div
      y={yPos}
      variants={variants}
      animate={state ? "active" : "inactive"}
      width={300}
      height={300}
      borderRadius={24}
      style={state ? { zIndex: 10 } : { zIndex: 1 }}
      left={37.5}
      onTap={handleTap}
      shadow={
        state
          ? "0 0 0 0 rgba(0, 0, 0, 0)"
          : "0px 0px 20px 0px rgba(0, 0, 0, .25)"
      }
    >
      <Scroll
        width="100%"
        height="100%"
        backgroundColor={null}
        scrollAnimate={controls}
      >
        <Frame
          position="relative"
          backgroundColor={"#09a960"}
          width="100%"
          height={300}
        />
        <Frame position="relative" height={1200} background="white" />

        <Frame
          top={20}
          left={20}
          height={""}
          width={""}
          background={null}
          style={{
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          <span style={{ fontSize: "1.6em", fontWeight: 600 }}>{title}</span>
          <br />
          <span
            style={{
              fontSize: "1em",
              fontWeight: 500,
              opacity: 0.5,
            }}
          >
            {subtitle}
          </span>
        </Frame>
      </Scroll>
      {state && (
        <Frame
          borderRadius={20}
          size={15}
          top={15}
          right={20}
          backgroundColor={"#09a960"}
          onTap={() => {
            setState(false);
          }}
        >
          <ImCross color="red" />
        </Frame>
      )}
    </motion.div>
  );
};

export default Card;
