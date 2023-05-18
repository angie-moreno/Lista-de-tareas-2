import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

export default function SobreNosotros() {
  return (
    <div>
      <Heading
        as="h2"
        size="3xl"
        noOfLines={1}
        mb="50px"
        align="center"
        mt="50px"
      >
        SOBRE NOSOTROS
      </Heading>
      <Box
        alignContent="center"
        justify="center"
        justifyItems="center"
        h="100vh"
        marginLeft="100px"
        mr="100px"
      >
        <Text fontSize="2xl" as="i" align="center" justify="center">
          Esta herramienta te ayuda a planificar tus tareas diarias y tareas
          laborales de acuerdo a tu necesidad , de esta manera podras
          realizarlas a tiempo. Es posible agregar una labor o compromiso que
          tenga más de tres caracteres,este campo es obligatorio para así poder
          guardar tus actividades pendientes.Es opcional poner una descripcion,
          asi no se te pasaría ningún detalle. Puedes dar check a tus tareas
          realizadas, de esta manera sabes lo que has realizado. Finalmente
          puedes borrar para ir limpiando tu lista , y editar cuando lo
          requieras. Para el desarrollo de esta aplicación se usaron
          herramientas tecnologicas como React,React Router,React Hook Form,
          Chakra ui, entre otras.
        </Text>
      </Box>
    </div>
  );
}
