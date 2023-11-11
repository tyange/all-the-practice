import { ReactNode } from "react";
import { Link, RouteObject } from "react-router-dom";

import { NavLink } from "@mantine/core";
import { routes } from "../../routes";

export default function Nav() {
  const generateLinks = (routes: RouteObject[]): ReactNode => {
    return routes.map((route) => (
      <NavLink
        component={Link}
        key={route.path}
        label={route.id}
        to={route.path!}
      >
        {route.children && generateLinks(route.children)}
      </NavLink>
    ));
  };

  return <>{generateLinks(routes)}</>;
}
