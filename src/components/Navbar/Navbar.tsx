import React, { FC, Fragment, KeyboardEvent, useState } from "react";
import Logo from "../Logo";
import { Title } from "./NavbarStyles";

const Navbar: FC = () => {
  return (
    <Fragment>
      <div style={{ background: "blue" }}>
        <section>
          <Logo />
          <Title>This is a Navbar</Title>
        </section>
      </div>
    </Fragment>
  );
};

export default Navbar;
