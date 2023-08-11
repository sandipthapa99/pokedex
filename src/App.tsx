import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import { useWindowScroll } from "@mantine/hooks";
import { ActionIcon, Flex } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { fadeIn } from "./utils";

function App() {
  const [scroll, scrollTo] = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Move to top button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // const fadeIn = keyframes({
  //   "0%": { opacity: 0 },
  //   "100%": { opacity: 1 },
  // });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-team" element={<Team />} />
      </Routes>
      {isVisible && (
        <Flex
          justify={"flex-end"}
          sx={{
            position: "sticky",
            bottom: "30px",
            marginRight: "30px",
            zIndex: 1,
            animation: `${fadeIn} 1s ease`,
          }}
        >
          <ActionIcon
            color="blue.7"
            variant="filled"
            size={"xl"}
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconArrowUp />
          </ActionIcon>
        </Flex>
      )}
    </div>
  );
}

export default App;
