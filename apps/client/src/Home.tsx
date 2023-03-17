import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

function home() {
  return (
    <>
      <Heading>Bienvenue</Heading>
      <br />
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" w={"10%"} />
        <Button colorScheme="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </>
  );
}

export default home;
