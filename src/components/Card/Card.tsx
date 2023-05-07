import { Box, Center, ChakraProvider, Input } from '@chakra-ui/react';
import { useState, useEffect }from "react";
import { Botao } from "../Button/Button";
import { api } from "../../api"

interface UserData {
    email: string;
    password: string;
    name: string;
}

export const Card = () => {

    const [email, setEmail] = useState<string>('');
    const [userData, setUserData] = useState<null | UserData>();

    useEffect(() => {
        const getData =async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData();
    }, [])

    return(
        <>
            <ChakraProvider>
                <Box minHeight='100vh' backgroundColor='#92c7a3' p={40}>
                    <Center>
                        <Box backgroundColor='#dfece6' borderRadius='lg' p={4} m={4} maxW='sm'>
                            <Center margin='5px'>
                                <h1>Faça o Login</h1>                              
                            </Center>
                            {userData?.name}
                            <Input placeholder='email' variant={'outline'} type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                            <Input placeholder='Enter password' type='password' variant={'outline'} />
                            <Center>
                                <Botao email={ email }/>
                            </Center>
                        </Box>
                    </Center>
                </Box>
            </ChakraProvider>
        </>
    )
}