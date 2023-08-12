import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { ActionIcon, Box, Flex } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { fadeIn } from "./utils";

function App() {
  const [scroll, scrollTo] = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  const isSmall = useMediaQuery("(max-width:48em)");

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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-team" element={<Team />} />
      </Routes>
      {isVisible && (
        <Box
          // justify={"flex-end"}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 15,
            // marginRight: "30px",
            zIndex: 2,
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
        </Box>
      )}
    </div>
  );
}

export default App;
