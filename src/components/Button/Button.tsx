import { Button, Center } from "@chakra-ui/react";

interface BotaoProps {
    onClick: () => void
}

export const Botao = ({ onClick }: BotaoProps) => {

  return (
    <Center>
      <Button size={"sm"} backgroundColor="#3ca2a2" color="white" onClick={onClick}>
        Entrar
      </Button>
    </Center>
  );
};
