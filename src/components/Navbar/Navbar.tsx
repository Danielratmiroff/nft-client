import React, { FC, Fragment, KeyboardEvent, useEffect, useState } from "react";
import { getUser, getVisit } from "../../redux";
import { reqVisit } from "../../redux/Apis/umsApi";
import { useAppDispatch } from "../../redux/store";
import Logo from "../Logo";
import { Title } from "./NavbarStyles";
import { useTypedSelector } from "../../redux/store";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();

  const hey = useTypedSelector(getUser);

  console.log(hey);

  dispatch(getVisit());

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
