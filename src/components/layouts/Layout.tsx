import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./Layout.module.css";

import logoImage from "../../assets/all-the-practice-logo.svg";
import Nav from "../ui/Nav";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <div className={classes.logoWrapper}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link to="/">
            <img src={logoImage} />
          </Link>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Nav />
      </AppShell.Navbar>
      <AppShell.Main className={classes.main}>{children}</AppShell.Main>
    </AppShell>
  );
}
