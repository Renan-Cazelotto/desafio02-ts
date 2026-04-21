import { 
  Center,
  ChakraProvider,
  Button
} from '@chakra-ui/react'
import { login } from '../services/login'

export const BotaoEntrar = () => {
    return(
        <Center>
            <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Entrar
            </Button>
        </Center>

    ) 
}

export const BotaoBoasVindas = () => {
    return(
        <Center>
            <Button onClick={login} colorScheme='red' size='sm' width='50%' marginTop='5px'>
              Boas Vindas
            </Button>
        </Center>

    ) 
}