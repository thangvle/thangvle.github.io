import React from "react-dom";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

function Header() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1">Telefoto</Heading>
      </Flex>
    </Flex>
  );
}
