import { Box, Button, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({
  title,
  description,
  btnTitle,
  link,
}: {
  title: string;
  description: string;
  btnTitle?: string;
  link?: string;
}) => {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery("(max-width: 36em)");

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginInline: "auto",
        textAlign: "center",
      }}
    >
      <figure
        style={{
          position: "relative",
          width: !smallScreen ? 480 : 240,
          height: !smallScreen ? 420 : 120,
          marginInline: "auto",
        }}
      >
        <img
          src={"/no-data.svg"}
          style={{ objectFit: "contain" }}
          alt={"empty task"}
          height={"100%"}
          width={"100%"}
        />
      </figure>
      <Title
        order={2}
        sx={{
          fontWeight: 600,
          fontFamily: "Poppins",
          fontSize: !smallScreen ? 40 : 24,
          color: theme.colors.dark[3],
        }}
        mt={30}
        mb={8}
      >
        {title}
      </Title>
      <Text
        component="p"
        sx={{
          fontSize: !smallScreen ? 20 : 16,
          color: theme.colors.gray[6],
        }}
      >
        {description}
      </Text>

      {btnTitle && link && (
        <Button color="yellow.8" onClick={() => navigate(link)}>
          {btnTitle}
        </Button>
      )}
    </Box>
  );
};

export default Empty;
