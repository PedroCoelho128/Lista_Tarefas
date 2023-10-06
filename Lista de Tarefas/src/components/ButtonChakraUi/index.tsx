import { Button} from '@chakra-ui/react'

interface Props{
    color: string
    label: string
}

function ButtonChakraUi({color, label}:Props) {
    return(
        <Button colorScheme={color}>{label}</Button>
    )
}

export default ButtonChakraUi
