import { axiosInstance } from "../src/redux/store";
import React, { FC, Fragment, KeyboardEvent, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useAppDispatch, useTypedSelector } from "./redux/store";
import * as Styled from "./AppStyles";
import { ThemeConsumer, ThemeContext } from "styled-components";
import { reqVisit } from "./redux/Apis/umsApi";

const App: FC = () => {
  const dispatch = useAppDispatch();

  reqVisit();

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
