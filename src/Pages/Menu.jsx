import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function () {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        colorScheme="#3182CE"
        bg="#3182CE"
        mt="30px"
      />
      <MenuList>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/tareas">Lista de tareas</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
