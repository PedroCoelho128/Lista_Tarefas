import { Input } from '@chakra-ui/react'


interface Props{
    placeholder: string
}

function InputChakraUi({placeholder}:Props){
    return(
        <Input placeholder={placeholder} />
    )
    }
export default InputChakraUi
