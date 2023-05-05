import {Button, Center} from "@chakra-ui/react";
import {login} from "../../services/login";


export const Botao = () => {
    return(
        <Center>
            <Button size={'sm'} backgroundColor='#3ca2a2' color='white' onClick={login}>Entrar</Button>
        </Center>
    )
}