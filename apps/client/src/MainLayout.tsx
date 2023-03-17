import { Container } from "@chakra-ui/react";
import Navbar from "../src/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container maxW={"full"} p={4}></Container>
    </>
  );
};

export default MainLayout;
