import { Box, Center, Input } from "@chakra-ui/react";
import { Botao } from "../Button/Button";
import { Children } from "react";

export const Card = ({ children }: any) => {
  return (
    <>
      <Box minHeight="100vh" backgroundColor="#92c7a3">
        {children}
      </Box>
    </>
  );
};
