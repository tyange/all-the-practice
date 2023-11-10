import { Link } from "react-router-dom";

import { NavLink } from "@mantine/core";

export default function Nav() {
  return (
    <NavLink label="Filter Practice" childrenOffset={28}>
      <NavLink
        component={Link}
        to="/async-select-practice"
        label="Async Select"
      />
    </NavLink>
  );
}
