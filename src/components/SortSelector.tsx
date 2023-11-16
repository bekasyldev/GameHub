import { HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <HStack paddingLeft={"40px"}>
        <MenuButton as={"button"}>Ordered by: Relevance</MenuButton>
        <BsChevronDown />
      </HStack>
      <MenuList>
        <MenuItem>Revelence</MenuItem>
        <MenuItem>Data added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
