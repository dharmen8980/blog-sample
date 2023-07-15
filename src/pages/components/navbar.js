import React from "react";
import { Navbar, Link, Text } from "@nextui-org/react";

export const NavMenu = () => {
  const collapseItems = [
    {
      Home: "/",
      Hacks: "./hacks",
      Tutorials: "./tutorials",
      "About Me": "./aboutMe",
    },
  ];
  return (
    <Navbar isBordered variant={"sticky"}>
      <Navbar.Brand className="space-x-4">
        <Navbar.Toggle className="lg:hidden" />
        <Text blockquote color="inherit" className="bg-transparent text-xl">
          Bytes of Wisdom
        </Text>
      </Navbar.Brand>
      <Navbar.Collapse>
        {collapseItems.map((item, index) =>
          Object.entries(item).map(([menuName, menuUrl]) => (
            <Navbar.CollapseItem key={menuName}>
              <Link color="inherit" href={menuUrl}>
                {menuName}
              </Link>
            </Navbar.CollapseItem>
          ))
        )}
      </Navbar.Collapse>
      <Navbar.Content hideIn="sm" className="text-md pr-6 space-x-2">
        <Navbar.Link isActive href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="./hacks">Hacks</Navbar.Link>
        <Navbar.Link href="#">Tutorials</Navbar.Link>
        <Navbar.Link href="#">About Me</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
