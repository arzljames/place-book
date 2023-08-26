import { Button, Menu } from "@mantine/core";
import { BiChevronDown } from "react-icons/bi";

const style = {
  btn: {
    height: "100%",
    width: "100%",
  },
};

export default function MenuButton() {
  return (
    <Menu
      transitionProps={{ transition: "pop-top-right" }}
      position="bottom-end"
      width={160}
      withinPortal
    >
      <Menu.Target>
        <Button variant="outline" style={style.btn}>
          Sort by: <BiChevronDown />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>A - Z</Menu.Item>
        <Menu.Item>Z - A</Menu.Item>
        <Menu.Item>High - Low</Menu.Item>
        <Menu.Item>Low - High</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
