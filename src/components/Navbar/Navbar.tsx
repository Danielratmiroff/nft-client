import React, { FC, Fragment, KeyboardEvent, useState } from "react";
import Logo from "../Logo";

const Navbar: FC = () => {
  return (
    <Fragment>
      <div style={{ background: "blue" }}>
        <section>
          <Logo />
          <p>This is a Navbar</p>
        </section>
      </div>
    </Fragment>
  );
};

export default Navbar;
