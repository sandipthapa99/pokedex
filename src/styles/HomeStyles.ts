import { createStyles } from "@mantine/core";

export const useHomeStyles = createStyles((theme) => ({
  gridContainer: {
    marginBottom: 24,
    ".mantine-Grid-root": {
      ".mantine-Grid-col": {
        "&:nth-of-type(6n+1)": {
          ".card": {
            backgroundColor: "#00D08450",
            ".circle": {
              backgroundColor: "#00D084",
              opacity: 0.8,
            },
          },
        },
        "&:nth-of-type(6n+2)": {
          ".card": {
            backgroundColor: "#0693E350",
            ".circle": {
              backgroundColor: "#0693E3",
              opacity: 0.8,
            },
          },
        },
        "&:nth-of-type(6n+3)": {
          ".card": {
            backgroundColor: "#975FE050",
            ".circle": {
              backgroundColor: "#975FE0",
              opacity: 0.8,
            },
          },
        },
        "&:nth-of-type(6n+4)": {
          ".card": {
            backgroundColor: "#3F60D650",
            ".circle": {
              backgroundColor: "#3F60D6",
              opacity: 0.8,
            },
          },
        },
        "&:nth-of-type(6n+5)": {
          ".card": {
            backgroundColor: "#116EA350",
            ".circle": {
              backgroundColor: "#116EA3",
              opacity: 0.8,
            },
          },
        },
        "&:nth-of-type(6n+6)": {
          ".card": {
            backgroundColor: "#F2A73A50",
            ".circle": {
              backgroundColor: "#F2A73A",
              opacity: 0.8,
            },
          },
        },
      },
    },
  },
}));
