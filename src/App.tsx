import React, { FC, Fragment, KeyboardEvent, useState } from "react";
import Navbar from "./components/Navbar";
import { useAppDispatch, useTypedSelector } from "./redux/store";
import * as Styled from "./AppStyles";
import "./assets/styles.css";

const App: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <Styled.AppContainer>
        <Navbar />
        <section>Hello</section>
      </Styled.AppContainer>
    </Fragment>
  );
};

export default App;
