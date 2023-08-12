import React, { useState } from "react";
import { Button, Container, Flex } from "@mantine/core";
import { useHomeStyles } from "../styles/HomeStyles";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import AllPokemon from "../components/AllPokemon";
import FilteredPokemon from "../components/FilteredPokemon";

const Home = () => {
  const { classes } = useHomeStyles();
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <>
      <Container size={1568} className={classes.gridContainer}>
        <Flex
          gap={16}
          justify={"space-between"}
          sx={{
            "@media (max-width: 350px)": {
              flexDirection: "column-reverse",
              alignItems: "center",
            },
          }}
        >
          <Filter setIsFiltered={setIsFiltered} />
          <Link to={"/my-team"}>
            <Button
              radius="md"
              rightIcon={<IconArrowRight />}
              color="blue.7"
              m={0}
              sx={{ fontFamily: "Raleway" }}
            >
              My Team
            </Button>
          </Link>
        </Flex>

        {!isFiltered && <AllPokemon />}
        {isFiltered && <FilteredPokemon />}
      </Container>
    </>
  );
};

export default Home;
