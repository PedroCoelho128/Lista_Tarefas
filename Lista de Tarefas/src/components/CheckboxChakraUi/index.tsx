import {Checkbox} from '@chakra-ui/react'


interface Props{
    label: string
}

function CheckboxChakraUi({label}:Props) {
    return(
        <Checkbox>{label}</Checkbox>
    )
}

export default CheckboxChakraUi