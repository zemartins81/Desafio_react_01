import { Box, Center, ChakraProvider, Input } from '@chakra-ui/react';
import React from "react";
import {Botao} from "../Button/Button";

export const Card = () => {
    return(
        <>
            <ChakraProvider>
                <Box minHeight='100vh' backgroundColor='#92c7a3' p={40}>
                    <Center>
                        <Box backgroundColor='#dfece6' borderRadius='lg' p={4} m={4} maxW='sm'>

                            <Center margin='5px'> 
                                <h1>Faça o Login</h1> 
                            </Center>

                            <Input placeholder='email' variant={'outline'} type='email'/>

                            <Input placeholder='Enter password' type='password' variant={'outline'} />

                            <Center>
                                <Botao/>
                            </Center>
                        </Box>
                    </Center>
                </Box>
            </ChakraProvider>
        </>
    )
}