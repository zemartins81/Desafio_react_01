import {Stack, Image, Text, Flex, Spacer, Button} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import logo from "../../assets/logo.jpg";
import {useNavigate} from "react-router-dom";

export const Header = () => {
  const { setIsLoggedIn, isLoggedIn} = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
      setIsLoggedIn(false);
      navigate('/')
  }

  return (
      <Flex>
        <Stack
            direction="row"
            align="center"
            p={4}
            backgroundColor={"#dfece6"}
            color={"#fff"}
            width="full"
        >
          <Image
              boxSize="120px"
              src={logo}
              alt="Dio Bank Logo"
              borderRadius="100px"
          />
          <Text fontSize="60px" as="b" color={"#92c7a3"}>
            Dio Bank
          </Text>

        <Spacer />
        {isLoggedIn && (
            <Button onClick={() => logout()} size={"sm"} backgroundColor="#3ca2a2" color="white">
              Sair
            </Button>
        )}
        </Stack>
      </Flex>

  );
};
