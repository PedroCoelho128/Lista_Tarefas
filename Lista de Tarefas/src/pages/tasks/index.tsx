import CardChakraUi from "../../components/TaskCardChakraUi";
import CheckboxChakraUi from "../../components/CheckboxChakraUi";
import InputChakraUi from "../../components/InputChakraUi";
import Layout from "../../components/Layout";
import ButtonChakraUi from "../../components/ButtonChakraUi";
import { Grid, GridItem } from "@chakra-ui/react";
import Titulo from "../../components/Titulo";

export default function Tarefas(){
    return(
        <Layout>
        <Grid templateRows='repeat(6, 0.166fr)' templateColumns='repeat(10, 0.1fr)' gap={2}>
        <GridItem colSpan={10} rowSpan={1}>
        <Titulo tag="h1" label="Lista de Tarefas"></Titulo>
        </GridItem>

        <GridItem colSpan={10} rowSpan={1}>
        <Titulo tag="h2" label="Inserir uma Nova Tarefa"></Titulo>
        </GridItem>

        <GridItem colSpan={8} rowSpan={1}>
        <InputChakraUi placeholder="Digite uma tarefa"></InputChakraUi>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1} gap={2} justifySelf="center" alignSelf="center">
        <CheckboxChakraUi label="Concluida?"></CheckboxChakraUi>
        </GridItem>

        
        <GridItem colSpan={1} rowSpan={1} gap={2}>
        <ButtonChakraUi color="blue" label="Adicionar"></ButtonChakraUi>
        </GridItem>
        
        
        
        <GridItem colSpan={10} rowSpan={1}>
        <CardChakraUi label="Tarefa 1" variant="filled"></CardChakraUi>
        </GridItem>
        <GridItem colSpan={10} rowSpan={1}>
        <CardChakraUi label="Tarefa 2" variant="filled"></CardChakraUi>
        </GridItem>
        <GridItem colSpan={10} rowSpan={1}>
        <CardChakraUi label="Tarefa 3" variant="filled"></CardChakraUi>
        </GridItem>
        
        </Grid>
        </Layout>
    )
}