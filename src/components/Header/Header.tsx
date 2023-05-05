import { Stack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.jpg'

export const Header = () => {
    return(
            <Stack direction='row' align='center' p={4} m={4} backgroundColor={'#92c7a3'} color={'#fff'} width='full'>
                <Image boxSize='120px' src={logo} alt='Dio Bank Logo' borderRadius='100px'/>
                <Text fontSize='60px' as='b'>Dio Bank</Text>
            </Stack>
    )
}