import { NextPage } from "next";
import {
  Container,
  Heading,
  Card,
  FormControl,
  FormLabel,
  Input,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const Login: NextPage = () => {
  return (
    <Container marginTop={10}>
      <Heading textAlign={"center"}>Iniciar sesión</Heading>
      <Card padding={3} justifyContent={"center"}>
        <form action="">
          <FormControl marginBottom={5}>
            <FormLabel>Email</FormLabel>
            <Input type="text" placeholder="Ingresa tu email" />
            <FormLabel>Código</FormLabel>
            <Input type="text" placeholder="Ingresa tu código" />
          </FormControl>
          <ButtonGroup marginTop={8}>
            <Button>Iniciar sesión</Button> <Button>Quiero un código</Button>
          </ButtonGroup>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
