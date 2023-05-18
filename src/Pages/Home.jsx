import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Box alignContent="center" justify="center" h="100vh">
        <Heading
          as="h1"
          size="4xl"
          noOfLines={1}
          mb="50px"
          align="center"
          mt="50px"
        >
          MIS TAREAS
        </Heading>

        <Text
          fontSize="3xl"
          noOfLines={[1, 2, 3]}
          as="i"
          align="center"
          mb="50px"
        >
          Bienvenido a MIS TAREAS, tu asistente personal para organizar tus
          tareas diarias
        </Text>
        <Text
          fontSize="3xl"
          noOfLines={[1, 2, 3]}
          as="i"
          align="center"
          mb="50px"
        >
          Herramienta para planificar y mantenerte al dia con tus tareas
        </Text>
        <Text
          fontSize="3xl"
          noOfLines={[1, 2, 3]}
          as="i"
          align="center"
          mb="50px"
        >
          Administra tus tareas, horarios y carga de trabajo con esta
          herramienta sencilla e intuitiva
        </Text>
      </Box>
    </div>
  );
}
