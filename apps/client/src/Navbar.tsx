import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Spacer,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        padding={3}
        bg={"gray"}
        borderBottomWidth={"medium"}
      >
        <Box p="2">
          <Heading size="lg">AfloApp</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap={4}>
          <Button colorScheme="teal">
            <Link>Home</Link>
          </Button>
          <Button colorScheme="teal">
            <Link>Todos</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default Navbar;
