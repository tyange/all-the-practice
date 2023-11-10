import { ReactNode } from "react";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./Layout.module.css";

import logoImage from "../../assets/all-the-practice-logo.svg";

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
          <div>
            <img src={logoImage} />
          </div>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
