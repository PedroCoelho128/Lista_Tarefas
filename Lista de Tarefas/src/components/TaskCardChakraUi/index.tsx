import { Card, CardBody, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import ButtonChakraUi from '../ButtonChakraUi'

interface Props{
  label: string
  variant: 'elevated' | 'outline' | 'filled' | 'unstyled'
}

function TaskCardChakraUi({label, variant}:Props){
 return(
<Stack spacing='4'>
    <Card key={variant} variant={variant}>
      <CardBody>
      <Grid templateColumns='repeat(20, 1fr)'gap={2}>
        <GridItem colSpan={18} alignSelf="center">
        <Text >{label}</Text>
        </GridItem>
        <GridItem colSpan={1}>
        <ButtonChakraUi color='red' label='Pendente' ></ButtonChakraUi>
        </GridItem>
        <GridItem colSpan={1}>
        <ButtonChakraUi color='red' label='Excluir'></ButtonChakraUi>
        </GridItem>
        </Grid>
      </CardBody>
      
    </Card>
</Stack>
 )
}

export default TaskCardChakraUi