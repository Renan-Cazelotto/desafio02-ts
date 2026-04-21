import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'

import { BotaoBoasVindas, BotaoEntrar } from "./Button";
import { login } from '../services/login';


export const Card = ({}) => {
  return(
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <BotaoEntrar/>
    </Box>
  )
}